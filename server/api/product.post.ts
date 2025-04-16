import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { price } = await readBody(event);

    const product = await prisma.product.create({
        data: {
            price: price
        }
    });

    return product;
});
