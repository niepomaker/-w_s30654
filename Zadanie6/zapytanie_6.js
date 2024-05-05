use("people")
db.people.aggregate([
    {
        $addFields: {
            bmi: { 
                $divide: [
                    "$weight", 
                    { $pow: [{ $divide: ["$height", 100] }, 2] }  
                ]
            }
        }
    },
    {
        $match: {
            bmi: { $gte: 25 }  
        }
    },
    {
        $group: {
            _id: "$location.city", 
            ilość: { $sum: 1 }  
        }
    },
    {
        $sort: { ilość: -1 }  
    },
    {
        $limit: 3
    }
]);
