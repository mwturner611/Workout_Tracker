const router = require("express").Router();
const db = require("../models");

// route doesn't send to workout.js the summary object it needs
router.get("/api/workouts", (req,res) => {
    db.Workout.find({})
    .then(dbWorkouts => {     
        console.log(dbWorkouts);   
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.get("/api/workouts/range", (req,res) => {
    db.Workout.find({})
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