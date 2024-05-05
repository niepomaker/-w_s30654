use("people")
db.people.aggregate([
    {
        $match: {
            sex: "Female",  
            nationality: "Poland" 
        }
    },
    {
        $unwind: "$credit"  
    },
    {
        $group: {
            _id: "$credit.currency",  
            sumaŚrodków: { $sum: "$credit.balance" },  
            średniaŚrodków: { $avg: "$credit.balance" }  
        }
    },
    {
        $sort: { _id: 1 } 
    }
]);