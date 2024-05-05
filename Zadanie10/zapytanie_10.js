use("people")
db.people.aggregate([
    {
        $match: {
            birth_date: {
                $gte: "1990-01-01T00:00:00.000Z",
                $lte: "2000-12-31T23:59:59.000Z" 
            }
        }
    },
    {
        $group: {
            _id: null,  
            średniaWaga: { $avg: "$weight" }  
        }
    }
]);