api: localhost:3000/api/order

bad date type for time

    {
        "sId": 2,
        "pId": 3,
        "time": "2025-04-16",
        "quantity": 5
    }

bad quantity

    {
        "sId": 2,
        "pId": 3,
        "time": "2025-04-16T20:34:22Z",
        "quantity": 5.2
    }

bad foreign key to sId

    {
        "sId": 15,
        "pId": 3,
        "time": "2025-04-16T20:34:22Z",
        "quantity": 5
    }

missing required field sId

    {
        "pId": 3,
        "time": "2025-04-16T20:34:22Z",
        "quantity": 5
    }

api: localhost:3000/api/product

bad price
    
    {
        "price": -10
    }

api: localhost:3000/api/employee

missing dNum for employee

    {
        "fName": "John",
        "lName": "Smith",
        "phoneNum": "123-123-1234"
    }

good data, but when run after the last call, violates uniquness of phoneNum despite the employee record not existing

    {
        "fName": "John",
        "lName": "Smith",
        "phoneNum": "123-123-1234",
        "dNum": 1
    }
