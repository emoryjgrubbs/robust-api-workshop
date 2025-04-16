import { z } from "zod";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = z.object({
    price: z.number().positive()
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

    const { price } = validatedBody.data;

    const product = await prisma.product.create({
        data: {
            price: price
        }
    });

    return product;
});
