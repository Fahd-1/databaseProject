import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const allowedDegrees = ['MBA', 'BSCS', 'BBA', 'MBBS'];

export default function Add() {
    const [id, setId] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "test22@mail",
        matricPercentage: "10",
        interPercentage: "10",
        // matricPassingDate: "2020-12-10T13:45:00.000Z",
        // interPassingDate: "2022-12-10T13:45:00.000Z",
        gapYear: "2",
        feeAfford: "20000",
        address: "Earth",
        mobileNumber: "1",
        degreeSelection: "NBA",
    })

    const checkDegreeAllowed = function () {
        let allowed = false;
        if (allowedDegrees.includes(formData.degreeSelection)) {
            if (formData.degreeSelection === 'BBA') {
                allowed = formData.gapYear <= 2
                console.log('reach', allowed)
            }
            if (allowedDegrees.includes(formData.degreeSelection)) {
                if (formData.degreeSelection === 'BBA') {
                    allowed = parseInt(formData.matricPercentage) >= 44 %
                        console.log('BBA check out', allowed)
                }


            }


            return allowed;
        }

        const handleSubmit = (e) => {
            e.preventDefault();

            let checker = checkDegreeAllowed()

            if (checker) {
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/addDegree',
                    data: { ...formData }

                }).then(function (response) {
                    // handle success
                    console.log(response);
                    console.log(response.data.data['_id'])

                    setId(response.data.data['_id']);
                })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });

                console.log('submitted')
            } else {
                console.log('Not A Valid degree')

            }
        }

        const getDegreeByEmail = (e) => {
            e.preventDefault();

            let checker = checkDegreeAllowed()

            if (checker) {
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/degreeEmail',
                    data: {
                        email: 'H@mail'
                    }
                }).then(function (response) {
                    // handle success
                    console.log(response);
                })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });

                console.log('email checks out')
            } else {
                console.log('Not A Valid degree')

            }
        }

        const getDegreeById = (e) => {
            e.preventDefault();

            // fetch('http://localhost:5000/degree/630909672657e4bfb4c45ddf')
            //   .then((response) => response.json())
            //   .then((data) => console.log(data));

            axios.get(`http://localhost:5000/degree/${id}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data, id);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

        return (
            <>
                <div>Add Degree Page</div>
                {/* <form onSubmit={handleSubmit}>

                    <label>Name </label>
                    <input type="text" name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <br />

                    {/* <label>Email </label>
                <input type="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                <br /> */}
                {/* 
                    <label>Phone Number </label>
                    <input type="text" name="mobileNumber" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br /> */}

                {/* <label>Phone Number </label>
                <input type="text" name="mobileNumber" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                <br /> */}

                {/* <label>Degree Selection</label>
                    <select id="cars" name="degreeSelection" onChange={(e) => setFormData({ ...formData, degreeSelection: e.target.value })} required >
                        {allowedDegrees.map((keyName, i) => (
                            <option value={keyName}>{keyName}</option>
                        ))}
                    </select> */}

                {/* <label>matricPercentage</label>
                    <input type="text" name="matricPercentage" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br />

                    <label>interPercentage</label>
                    <input type="text" name="interPercentage" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br />


                    <label>matricPassingDate</label>
                    <input type="text" name="matricPassingDate" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br />


                    <label>interPassingDate</label>
                    <input type="text" name="interPassingDate" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br />

                    <label>gapYear</label>
                    <input type="text" name="gapYear" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br />

                    <label>feeAfford</label>
                    <input type="text" name="feeAfford" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br />

                    <label>address</label>
                    <input type="text" name="address" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                    <br /> */}

                {/* <div className="button-container">
                        <input type="submit" />
                    </div> */}

                {/*   </form> */}

                {/* <div>
                {Object.keys(formData).map((keyName, i) => (
                    <ul key={i}>
                        <span className="input-label">{keyName}: {formData[keyName]}</span>
                    </ul>
                ))}
            </div> */}

                <Link to="/">Home</Link>

                {/* <br />
                <br /> */}
                {/* <button onClick={getDegreeById}>Get a degree</button>
                <button onClick={getDegreeByEmail}>Get a degree</button> */}

            </>
        )
    }
}