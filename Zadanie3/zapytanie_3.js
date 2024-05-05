use("people")
db.people.aggregate([
    {
        $unwind: "$credit" 
    },
    {
        $group: {
            _id: "$credit.currency", 
            balance: { $sum: "$credit.balance" }  
        }
    }
]);