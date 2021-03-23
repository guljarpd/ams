const airlines = require("../data/airlines.json");
const airports = require("../data/airports.json");
const airlineRoute =  require("../data/route.json")

// list of running airlines
const airlineList = async(req, res) => {
    try {

        const final_res = []

        for (let i = 0; i < airlineRoute.length; i++) {

            for (let j = 0; j < airlines.length; j++) {
                
                if (airlineRoute[i].airline_code === airlines[j].code) {
                    final_res.push({
                        ...airlineRoute[i],
                        name: airlines[j].name,
                        seats: airlines[j].seats,
                        meals: airlines[j].meals
                    })
                }
            }
        }

        return res.status(200).json({data: final_res}) 
        
    } catch (error) {
        return res.status(400).json({error: error.message}) 
    }
} 

module.exports = {
    airlineList
}

