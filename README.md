### Airline Management System
---

Requirements
 - Nodejs >= v14.16.0

Run `npm install` command to install all required packages.

Start Application `node app.js`

Please consider JSON files as database for now. which can be found in `/data` dir insideapplication root folder.


### APIs
---
Get all runnig/avilailable fight list

`http://127.0.0.1:8181/airline/list`

METHOD: `GET`

OUTPUT
```json
{
    "data": [
        {
            "departure_iata": "BLR",
            "arrival_iata": "JFK",
            "departure_time": "21:15",
            "arrival_time": "11:15",
            "departure_date": "23-03-2021",
            "arrival_date": "24-03-2021",
            "stops": [],
            "airline_code": "6E",
            "name": "IndiGo",
            "seats": {
                "total": {
                    "economy": 70,
                    "business": 20
                },
                "available": {
                    "economy": 48,
                    "business": 19
                }
            },
            "meals": {
                "economy": "FREE",
                "business": "FREE"
            }
        },
        {
            "departure_iata": "JFK",
            "arrival_iata": "LHR",
            "departure_time": "14:00",
            "arrival_time": "22:45",
            "departure_date": "25-03-2021",
            "arrival_date": "25-03-2021",
            "stops": [
                {
                    "airport_iata": "BLR",
                    "departure_time": "18:00",
                    "arrival_time": "18:45",
                    "departure_date": "25-03-2021",
                    "arrival_date": "25-03-2021"
                }
            ],
            "airline_code": "9H",
            "name": "Chang An Airlines",
            "seats": {
                "total": {
                    "economy": 60,
                    "business": 20
                },
                "available": {
                    "economy": 40,
                    "business": 9
                }
            },
            "meals": {
                "economy": "PAID",
                "business": "FREE"
            }
        }
    ]
}
```

Create Booking

`http://127.0.0.1:8181/airline/book`

METHOD: `POST`

POST BODY

```json
{
    "departure_iata": "BLR",
    "arrival_iata": "JFK",
    "departure_date": "23-03-2021",
    "departure_time": "21:15",
    "arrival_date": "24-03-2021",
    "arrival_time": "11:15",
    "airline_code": "6E",
    "passengers": {
        "adult": 2,
        "children": 1,
        "infant": 1
    },
    "seat_class": "economy",
    "currency": "INR",
    "total_amount": 7000.00,
    "booked_agency": "yatra.com"
}
```


OUTPUT

```json
{
    "data": {
        "booking_id": "ec75f9ee-c1a7-4ca4-8098-2d02b6637d3d",
        "arrival_iata": "JFK",
        "departure_date": "23-03-2021",
        "departure_time": "21:15",
        "arrival_date": "24-03-2021",
        "arrival_time": "11:15",
        "departure_iata": "BLR",
        "airline_code": "6E",
        "passengers": {
            "adult": 2,
            "children": 1,
            "infant": 1
        },
        "seat_class": "economy",
        "currency": "INR",
        "total_amount": 7000,
        "booked_agency": "yatra.com"
    }
}
```


