import React from 'react'

function FormHome() {
    return (
        <>
            <div style={{alignTracks:'center'}}>
                <div className="card text-center">
                    
                        <div className="card-header bg-transparent border-success">warm welcome to <h3>BADBC </h3>banking application</div>
                        <div className="card-body text-success"> 
                        <img src="https://i.ibb.co/Kb7xSbV/badbank.jpg" alt="Im1" class="img-fluid"/>
                            <h5 className="card-title">WELCOME !</h5>
                            <p className="card-text">Be a part of our confusion today</p>
                        </div>
                </div>

                <div className="card text-center">
                        <div className="card-header">
                            news letter
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">No Account?</h5>
                            <p className="card-text">Sign Up a new account with us to receive a lower saving interest today!</p>
                            <a href="#/CreateAccount" className="btn btn-success">Create Account Now!</a>
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                </div>
            </div>
            <footer>
                <p>image source: https://www.thehindubusinessline.com/</p>
            </footer>
        </>
    );
};

export default FormHome
