const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./Db.js')

require("./models/degreeModel.js");
const Degree = mongoose.model('degree');

const express = require('express');
const app = express();
dotenv.config()
connectDB()


app.use(express.json());
// const port = 5000
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

const cors = require('cors')
app.use(cors());

// const Routes = require('./routes');

// app.use('/routes', Routes);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post('/addDegree',
    async (req, res) => {
        const { email } = req.body;
        const userExist = await Degree.findOne({ email });

        console.log(userExist)
        if (userExist) {
            return res
                .status(400)
                .json({
                    header: {
                        message: "Degree Already exist with this email",
                        code: 1
                    }
                });
        }

        const TestDegree = new Degree({
            name: req.body.name,
            email: req.body.email,
            matricPercentage: req.body.matricPercentage,
            interPercentage: req.body.interPercentage,
            matricPassingDate: req.body.matricPassingDate,
            interPassingDate: req.body.interPassingDate,
            gapYear: req.body.gapYear,
            feeAfford: req.body.feeAfford,
            address: req.body.address,
            mobileNumber: req.body.mobileNumber,
            degreeSelection: req.body.degreeSelection,
        });

        console.log('data is this: ', TestDegree)
        if (TestDegree) {
            res.status(200).json({
                header: {
                    message: "Degree Made", code: 0
                },
                data: TestDegree
            });

            TestDegree.save().then(console.log('works?')).catch(err => res.status(400).json({
                header: {
                    message: "Degree cannot be saved",
                    err,
                    code: 1
                }
            }));
        } else {
            res.status(400).json({
                header: {
                    message: "Degree is invalid", err,
                    code: 1
                }
            });
        }
    });

app.get('/degree/:id',
    async (req, res) => {
        const userId = req.params.id;
        const user = await Degree.findById(userId)
            .then(res.status(200))
            .catch(err => res.status(400).json({
                header: { message: "Unable to find user with given id", err, code: 1 }
            }));

        //do not .json data inside 'then()' as that exits out of the request. (Although that should work as well)
        if (user) {
            return res.status(200).json({
                header: { message: "Degree retrieved successfully", code: 0 },
                data: user,

            })
        } else {
            return res.status(400).json({
                header: { message: "Error in retrieiving Degree", code: 1 },
                data: user,

            })
        }
    });

app.post('/degreeEmail',
    async (req, res) => {
        const email = req.body.email;
        const user = await Degree.findOne({ email })
            .then(res.status(200))
            .catch(err => res.status(400).json({
                header: { message: "Unable to find user with given email", err, code: 1 }
            }));

        //do not .json data inside 'then()' as that exits out of the request. (Although that should work as well)
        if (user) {
            return res.status(200).json({
                header: { message: "Degree using email retrieved successfully", code: 0 },
                data: user,

            })
        } else {
            return res.status(400).json({
                header: { message: "Error in retrieiving Degree", code: 1 },
                data: user,

            })
        }
    });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})