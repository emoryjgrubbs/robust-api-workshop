import { z } from "zod";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = z.object({
    sId: z.number(),
    pId: z.number(),
    time: z.coerce.date(),
    quantity: z.number().positive().step(1),
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

    const { sId, pId, time, quantity } = validatedBody.data;

    const order = await prisma.order.create({
        data: {
            sId: sId,
            pId: pId,
            time: time,
            quantity: quantity
        }
    });

    return order;
});
