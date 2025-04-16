import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { fName, lName, phoneNum, dNum } = await readBody(event);

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

