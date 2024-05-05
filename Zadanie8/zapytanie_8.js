use("people")
db.people.aggregate([
    {
        $match: {
            last_name: { $regex: '^R' } 
        }
    },
    {
        $unwind: "$credit"  
    },
    {
        $group: {
            _id: null,  
            sumaŚrodków: { $sum: "$credit.balance" } 
        }
    }
]);
