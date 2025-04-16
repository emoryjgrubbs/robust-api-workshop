import { z } from "zod";

import { PrismaClient } from "@prisma/client";

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
});

