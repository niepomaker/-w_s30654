use("people")
db.people.aggregate([
    {
        $addFields: {
            tylkoData: {
                $dateToString: {
                    format: "%Y-%m-%d", 
                    date: {
                        $dateFromString: {
                            dateString: "$birth_date",
                            format: "%Y-%m-%dT%H:%M:%SZ" 
                        }
                    }
                }
            }
        }
    },
    {
        $group: {
            _id: "$tylkoData",  
            count: { $sum: 1 }  
        }
    },
    {
        $sort: { count: -1 } 
    },
    {
        $limit: 3  
    }
]);