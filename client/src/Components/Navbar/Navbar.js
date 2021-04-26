import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
        <ul class="nav">
            <li class="nav-item">
                <Link class="nav-link active" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/login">Profile</Link>
            </li>
            <li class="nav-item">
                <Link  class="nav-link" to="/create">CreateEvent</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link disabled" href="/create">Disabled</Link>
            </li>

            {/* <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">          
                <form class="d-flex">
                <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav> */}
      </ul>
        <hr />
        </div>
    )
}

