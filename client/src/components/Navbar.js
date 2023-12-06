import React from 'react'
import '../styles/navbar.module.css';

function Navbar() {
    return (
        <div>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/en/6/68/Chaitanya_Bharathi_Institute_of_Technology_logo.png" alt="Icon" />
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Admission Form</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>

                </div>
            </nav>

        </div>
    )
}

export default Navbar