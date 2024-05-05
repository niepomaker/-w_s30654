use("people")
db.people.aggregate([
    {
        $addFields: {
            wiek: {
                $floor: {
                    $divide: [
                        {
                            $subtract: [
                                new Date(),
                                {
                                    $dateFromString: {
                                        dateString: "$birth_date" 
                                    }
                                }
                            ]
                        },
                        (365 * 24 * 60 * 60 * 1000)
                    ]
                }
            }
        }
    },
    {
        $group: {
            _id: "$job", 
            średniWiek: { $avg: "$wiek" }  
        }
    },
    {
        $sort: { średniWiek: 1 }  
    }
]);