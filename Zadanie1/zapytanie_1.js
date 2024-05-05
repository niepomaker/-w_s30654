use("people")
db.people.aggregate([
    {
        $group: {
            _id: "$sex", 
            średniaWaga: { $avg: "$weight" }, 
            średniWzrot: { $avg: "$height" } 
        }
    }
]);
