import { z } from "zod";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const schema = z.object({
    fName: z.string(),
    lName: z.string(),
    phoneNum: z.string(),
    dNum: z.number().step(1)
});

const validateSchema = schema.strict();

export default defineEventHandler(async (event) => {
    const validatedBody = await readValidatedBody(event, (body) =>
		validateSchema.safeParse(body)
	);

	if (!validatedBody.success) {
		const zodError = validatedBody.error?.flatten();
		throw createError({
			statusCode: 400,
			statusMessage: "Bad Request Body",
			data: zodError,
		});
	}

    const { fName, lName, phoneNum, dNum } = validatedBody.data;

    try {
        const user = await prisma.user.create({
            data: {
                fName: fName,
                lName: lName,
                phoneNum: phoneNum,
            }
        });

        const employee = await prisma.employee.create({
            data: {
                id: user.id,
                dNum: dNum
            }
        });

        return {user, employee};
    }
    catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
			switch (String(e.code)) {
				case "P2002":
					console.log("uniqueness error");
					throw createError({
						statusCode: 400,
						statusMessage: "Schema Uniqueness Constraint Violated",
						data: e.meta,
					});
				case "P2005":
				case "P2006":
					console.log("bad input");
					throw createError({
						statusCode: 400,
						statusMessage: "Wrong input type",
						data: e.meta,
					});
				case "P2011":
				case "P2012":
				case "P2013":
					console.log("missing required fields");
					throw createError({
						statusCode: 400,
						statusMessage: "Missing required fields",
						data: e.meta,
					});
				default:
					throw createError({
						statusCode: 400,
						statusMessage: "Unexpected Prisma error",
						message: e.message,
						data: e.meta,
					});
			}
		}
    }

});

