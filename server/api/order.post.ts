import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { sId, pId, time, quantity } = await readBody(event);

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
