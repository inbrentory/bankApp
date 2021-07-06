import React from 'react'

function Navbar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">BAD BANK</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a type="button" className="nav-link active" aria-current="page" href="#/" data-toggle="tooltip" data-placement="top" title="Landing Page">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a type="button" className="nav-link active" aria-current="page" href='#/CreateAccount' data-toggle="tooltip" data-placement="top" title="Sign up for a new account">
                Create Account
                </a>
                </li>                
                <li className="nav-item">
                <a type="button" className="nav-link active" aria-current="page" href='#/Deposit' data-toggle="tooltip" data-placement="top" title="Adding fund to your balance">
                Deposit
                </a>
                </li>
                <a type="button" className="nav-link active" aria-current="page" href='#/Withdraw' data-toggle="tooltip" data-placement="top" title="Retrieving fund from your balance">
                Withdraw
                </a>

                <li className="nav-item">
                <a type="button" className="nav-link active" aria-current="page" href='#/AllData' data-toggle="tooltip" data-placement="top" title="Back of House Data">
                All Data
                </a>
                </li>

            </ul>
            </div>
        </div>
        </nav>
        </>
    );
}
export default Navbar

