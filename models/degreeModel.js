const mongoose = require('mongoose');
const schema = mongoose.Schema

const degreeSchema = new schema({

    matricPercentage: {
        type: String,
        required: true,
    },
    interPercentage: {
        type: String,
        required: true,
    },
    matricPassingDate: {
        type: Date,
        default: "2020-12-10T13:45:00.000Z",
        required: false,
    },
    interPassingDate: {
        type: Date,
        default: "2022-12-10T13:45:00.000Z",
        required: false,
    },
    gapYear: {
        type: String,
        required: true,
    },
    feeAfford: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    degreeSelection: {
        type: String,
        required: true
    }
});

mongoose.model("degree", degreeSchema);