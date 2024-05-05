use("people")
db.people.aggregate([
    {
        $group: {
            _id: "$sex",  // Grupowanie dokumentów według płci
            średniaWaga: { $avg: "$weight" },  // Obliczanie średniej wagi
            średniWzrot: { $avg: "$height" }   // Obliczanie średniego wzrostu
        }
    }
]);
