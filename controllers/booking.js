const uuid = require('uuid');
const airlines = require("../data/airlines.json");
const airlineRoute =  require("../data/route.json");
// airline booking
const airlineBooking = async(req, res) => {
    try {

        const { departure_iata, arrival_iata, departure_time, arrival_time, departure_date, arrival_date, airline_code, passengers, seat_class, currency, total_amount, booked_agency } = req.body

        let total_requested_seat = Object.keys(passengers).map((k)=>{return passengers[k]})
        
        const reducers = (accumulator, currentVal) => accumulator + currentVal;

        total_requested_seat = total_requested_seat.reduce(reducers);
        // check airline route
        for (let i = 0; i < airlineRoute.length; i++) {
            if (departure_date === airlineRoute[i].departure_date && 
                airline_code === airlineRoute[i].airline_code &&
                departure_iata === airlineRoute[i].departure_iata &&
                arrival_iata === airlineRoute[i].arrival_iata &&
                departure_time === airlineRoute[i].departure_time &&
                arrival_time === airlineRoute[i].arrival_time
                ) {
               for (let j = 0; j < airlines.length; j++) {
                   if (airlines[j].seats.available[seat_class] >= total_requested_seat) {
                    
                    // booked. and stored in DB.
                    return res.status(201).json({data: {
                        booking_id: uuid.v4(),
                        arrival_iata, 
                        departure_date,
                        departure_time,
                        arrival_date, 
                        arrival_time, 
                        departure_iata,
                        airline_code,
                        passengers,
                        seat_class,
                        currency,
                        total_amount,
                        booked_agency
                    }}) 


                   } else {
                    //    all booked
                    return res.status(404).json({error: 'Not Found'}) 
                   }
               } 
            }else{
                // airline not found 
                return res.status(404).json({error: 'Not Found'}) 
            }
        }
        
    } catch (error) {
        // error
        return res.status(400).json({error: error.message}) 
    }
}

module.exports = {
    airlineBooking
}