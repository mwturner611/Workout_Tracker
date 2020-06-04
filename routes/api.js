const router = require("express").Router();
const db = require("../models");

router.get("api/workouts/range", (req,res) => {
    Workout.find({})
    .sort({duration: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({body}, res) => {
    db.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});