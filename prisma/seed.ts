import { PrismaClient } from "@prisma/client";
const prisma: PrismaClient = new PrismaClient();

import { TimeSlot } from "@prisma/client";

const users = [{
  "id": 1,
  "fName": "Caril",
  "lName": "Roache",
  "phoneNum": "715-879-3971"
}, {
  "id": 2,
  "fName": "Cammie",
  "lName": "Willacot",
  "phoneNum": "555-374-2689"
}, {
  "id": 3,
  "fName": "Chandra",
  "lName": "Wilcock",
  "phoneNum": "913-101-9746"
}, {
  "id": 4,
  "fName": "Nevil",
  "lName": "Longfield",
  "phoneNum": "191-345-9048"
}];

const shoppers = [{
  "id": 1
}, {
  "id": 2
}];

const products = [{
  "id": 1,
  "price": 9.99
}, {
  "id": 2,
  "price": 3.99
}, {
  "id": 3,
  "price": 39.99
}, {
  "id": 4,
  "price": 69.99
}, {
  "id": 5,
  "price": 3.79
}];

const orders = [{
  "sId": 2,
  "pId": 5,
  "time": "2024-07-10T05:18:25Z",
  "quantity": 34
}, {
  "sId": 2,
  "pId": 5,
  "time": "2025-01-29T23:45:55Z",
  "quantity": 91
}, {
  "sId": 1,
  "pId": 2,
  "time": "2025-03-28T18:43:39Z",
  "quantity": 40
}, {
  "sId": 1,
  "pId": 2,
  "time": "2024-12-29T03:30:14Z",
  "quantity": 28
}, {
  "sId": 2,
  "pId": 2,
  "time": "2024-11-25T18:57:21Z",
  "quantity": 98
}, {
  "sId": 2,
  "pId": 1,
  "time": "2024-08-30T06:15:36Z",
  "quantity": 32
}, {
  "sId": 1,
  "pId": 3,
  "time": "2024-05-11T06:04:27Z",
  "quantity": 86
}, {
  "sId": 1,
  "pId": 1,
  "time": "2024-09-12T20:48:08Z",
  "quantity": 37
}, {
  "sId": 1,
  "pId": 2,
  "time": "2024-08-21T19:55:58Z",
  "quantity": 64
}, {
  "sId": 2,
  "pId": 1,
  "time": "2024-12-01T23:39:44Z",
  "quantity": 25
}, {
  "sId": 2,
  "pId": 5,
  "time": "2024-05-10T15:02:43Z",
  "quantity": 27
}, {
  "sId": 2,
  "pId": 4,
  "time": "2025-01-16T01:15:41Z",
  "quantity": 55
}, {
  "sId": 1,
  "pId": 4,
  "time": "2024-08-18T10:03:17Z",
  "quantity": 93
}, {
  "sId": 2,
  "pId": 1,
  "time": "2024-11-17T22:18:31Z",
  "quantity": 7
}, {
  "sId": 1,
  "pId": 2,
  "time": "2025-01-14T21:59:39Z",
  "quantity": 69
}, {
  "sId": 1,
  "pId": 5,
  "time": "2024-06-28T02:28:38Z",
  "quantity": 61
}, {
  "sId": 2,
  "pId": 5,
  "time": "2024-07-13T19:11:21Z",
  "quantity": 51
}, {
  "sId": 2,
  "pId": 2,
  "time": "2024-07-01T16:47:43Z",
  "quantity": 4
}, {
  "sId": 2,
  "pId": 2,
  "time": "2024-12-24T17:49:13Z",
  "quantity": 8
}, {
  "sId": 1,
  "pId": 2,
  "time": "2024-04-28T06:04:02Z",
  "quantity": 97
}];

const employees = [{
  "id": 2,
  "dNum": 1
}, {
  "id": 3,
  "dNum": 2
}];

const departments = [{
  "dNum": 1
}, {
  "dNum": 2
}];

const shifts = [{
  "eId": 2,
  "day": "2025-01-18T00:22:37Z",
  "shift": "AFTERNOON"
}, {
  "eId": 2,
  "day": "2024-11-27T15:59:31Z",
  "shift": "MORNING"
}, {
  "eId": 2,
  "day": "2024-11-26T15:31:46Z",
  "shift": "AFTERNOON"
}, {
  "eId": 2,
  "day": "2025-03-20T15:51:16Z",
  "shift": "MORNING"
}, {
  "eId": 2,
  "day": "2024-05-21T04:28:11Z",
  "shift": "MORNING"
}, {
  "eId": 2,
  "day": "2024-07-16T23:50:09Z",
  "shift": "AFTERNOON"
}, {
  "eId": 2,
  "day": "2024-10-29T09:46:00Z",
  "shift": "AFTERNOON"
}, {
  "eId": 3,
  "day": "2024-12-07T16:43:18Z",
  "shift": "NIGHT"
}, {
  "eId": 3,
  "day": "2024-12-04T21:33:59Z",
  "shift": "MORNING"
}, {
  "eId": 2,
  "day": "2025-01-31T03:39:09Z",
  "shift": "MORNING"
}, {
  "eId": 3,
  "day": "2024-09-17T21:28:06Z",
  "shift": "NIGHT"
}, {
  "eId": 3,
  "day": "2025-04-06T20:20:50Z",
  "shift": "AFTERNOON"
}, {
  "eId": 3,
  "day": "2025-03-12T12:46:43Z",
  "shift": "NIGHT"
}, {
  "eId": 2,
  "day": "2024-08-22T21:14:20Z",
  "shift": "AFTERNOON"
}, {
  "eId": 2,
  "day": "2025-01-29T06:04:24Z",
  "shift": "MORNING"
}, {
  "eId": 2,
  "day": "2025-04-07T17:22:36Z",
  "shift": "NIGHT"
}, {
  "eId": 2,
  "day": "2025-02-24T08:08:56Z",
  "shift": "MORNING"
}, {
  "eId": 2,
  "day": "2025-03-04T12:56:55Z",
  "shift": "MORNING"
}, {
  "eId": 3,
  "day": "2025-02-09T08:42:08Z",
  "shift": "MORNING"
}, {
  "eId": 3,
  "day": "2024-09-03T09:56:02Z",
  "shift": "AFTERNOON"
}];

const main = async () => {
    await prisma.user.createMany({ data: users })
    await prisma.shopper.createMany({ data: shoppers })
    await prisma.product.createMany({ data: products })
    await prisma.order.createMany({ data: orders })
    await prisma.department.createMany({ data: departments })
    await prisma.employee.createMany({ data: employees })
    await prisma.shift.createMany({ data: shifts })
}

main().catch((err) => {
	console.warn("Error while generating seed: \n", err);
});

