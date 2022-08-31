import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const check = function () {
        console.log('whats wrong');
    }

    return (<>
        <div>Home Page</div>

        <div><Link to="/Add">Add Degree Page</Link></div>
        <div><Link to="/Check"> Check Page</Link></div>

        <button onClick={check}> test </button>
    </>
    )
}
