use("people")
db.people.aggregate([
    {
        $addFields: {
            bmi: {
                $divide: [
                    "$weight",
                    {
                        $pow: [
                            { $divide: ["$height", 100] },
                            2
                        ]
                    }
                ]
            }
        }
    },
    {
        $group: {
            _id: "$nationality", 
            średnieBMI: { $avg: "$bmi" }, 
            minBMI: { $min: "$bmi" },  
            maxBMI: { $max: "$bmi" }  
        }
    },
    {
        $sort: { _id: 1 }  
    }
]);