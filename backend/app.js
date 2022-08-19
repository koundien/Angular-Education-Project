//importer le module express
const express = require("express");
// import body-parser
const bodyParser = require("body-parser");
//create  express application named app
const app = express();

// importation de mongoose 
const mongoose = require('mongoose');





// connect app to base do donnée named oubaiedDB
mongoose.connect('mongodb://localhost:27017/oubaiedDB');
const Cour = require('./models/cour');
const Event = require('./models/event');
const User = require('./models/user');
const Reservation = require('./models/reservation');



// cofigurer bodyparser 
// send response with JSON format
app.use(bodyParser.json());

// parse request object
app.use(bodyParser.urlencoded({ extended: true }));

// security configuration 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});

// traitement logique signup
app.post("/users/signup", (req, res) => {
    console.log(req.body)
    let user = new User(req.body);
    user.save((err, doc) => {
        if (err) {

        } else {
            res.json({
                message: "tout va bien"
            })
        }
    });


})


// traitement logique add course 
app.post("/courses", (req, res) => {
    let course = new Cour(req.body);
    course.save((err, doc) => {
        if (err) {
            console.log("here error", err);

        } else {
            res.json({
                message: "tout va bien"
            })
        }
    });


})

// traitement logique addEvent

app.post("/events", (req, res) => {
    let event = new Event(req.body);
    event.save((err, doc) => {
        if (err) {

        } else {
            res.json({
                message: "tout va bien"
            })
        }

    })


})

// tratement logique login 

app.post("/users/login", (req, res) => {
    console.log("here into users ", req.body)
    User.findOne({ email: req.body.email, pwd: req.body.pwd }).then(
        (doc) => {
            if (doc) {
                res.json({
                    result: doc,
                    message: '1'

                })

            } else {
                res.json({
                    message: '0'
                })

            }
        }
    )

})

// traitement logique de gettAllCourses
app.get("/courses", (req, res) => {
    Cour.find().then(
        (doc) => {
            res.json({
                result: doc
            })
        }
    )
})

// traitement logique de getCourseById
app.get("/courses/:id", (req, res) => {
    Cour.findOne({ _id: req.params.id }).then(
        (doc) => {
            console.log(doc)
            res.json({
                result: doc
            })
        }
    )


})

// traitement logique de getAllCoursesByTeacherId
app.get("/courses/tid/:id", (req, res) => {
    Cour.find({ teacherId: req.params.id }).then(
        (doc) => {
            res.json({
                result: doc
            })
        }
    )
})

// traitement logique de updateCourse
app.put("/courses", (req, res) => {
    Cour.updateOne({ _id: req.body._id }, req.body).then((doc) => {
        console.log(req.body)
        res.json({
            message: doc
        })
    }

    )
})

// traitement logique de deleteCourse
app.delete("/courses/:id", (req, res) => {
    Cour.deleteOne({ _id: req.params.id }).then((doc) => {
        res.json({
            message: doc
        })
    })
})
// traitement logique de signup student 
app.post("/users/signup", (req, res) => {
    let x = new User(req.body)
    x.save((err, doc) => {
        if (err) {
            res.json({
                message: "check it"
            })
        } else {
            res.json({
                message: "user saved"
            })
        }
    })
})

//traitement logique de getAllStudent
app.get("/users/students", (req, res) => {
    User.find({ role: "student" }).then((doc) => {
        res.json({
            result: doc
        })
    })
})
//traitement logique de getAllTeachers
app.get("/users/teachers", (req, res) => {
    User.find({ role: "teacher" }).then((doc) => {
        res.json({
            result: doc
        })
    })
})
// traitement logique de getAllUserById
app.get("/users/:id", (req, res) => {
    User.findOne({ _id: req.params.id }).then((doc) => {
        res.json({
            result: doc
        })
    })
})
// traitement logique de addReservation 
app.post("/reservations", (req, res) => {
    r = new Reservation(req.body);
    console.log("here object", req.body)
    r.save((err, doc) => {
        if (err) {
            res.json({
                message: "reservation not added"
            })
        } else {
            res.json({
                message: "reservation added succesfully"
            })
        }
    });
})
// traitement logique de getCourByStudentId
app.get("/reservations/tid/:id", (req, res) => {
    Reservation.find({ idUser: req.params.id, type: 'cour' }).then(
        (doc) => {
            res.json({
                result: doc
            })
        }
    )
})
// traitement logique de getAllReservation populate cour
app.get("/reservations/Test_populate/:id", (req, res) => {
    
    
    Reservation.find({ idUser: req.params.id }).populate('idCourEvent').then((findedObject) => {

console.log("hedidhieieidie",findedObject);
        res.status(200).json({
            result: findedObject
        })
    })
})
// traitement logique de getAllEvent
app.get("/events", (req, res) => {
    Event.find().then(
        (data) => {
            console.log("here events", data)
            res.json({
                result: data
            })
        }
    )
})
module.exports = app; 