const router = require("express").Router();
const db = require("../models");

// db.Workout.create({name: "first Workout"})
// .then(dbWorkout => {
//     console.log(dbWorkout);
// })
// .catch(({message}) => {
//     console.log(message);
// });

router.get("/api/workouts", (req,res) => {
    db.Exercise.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.get("/api/workouts/range", (req,res) => {
    db.Exercise.find({})
    .sort({duration: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
    db.Exercise.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;