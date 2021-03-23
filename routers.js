module.exports = function(app){

    // add middleware 

    // 
    const airline = require('./controllers/airlines');
    const booking = require('./controllers/booking');

    // api route
    app.get('/airline/list', airline.airlineList);
    // 
    app.post('/airline/book', booking.airlineBooking)
}