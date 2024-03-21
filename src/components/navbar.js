import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context";

function NavBar() {
    const ctx = useContext(UserContext);
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
        ctx.setActiveUser(null);
    }

    const navbarStyle = {
        backgroundColor: '#343a40',
    };

    const navLinkStyle = {
        color: 'white',
        marginRight: '10px',
    };

    const logoutButtonStyle = {
        marginLeft: '10px',
    };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
                <a className="navbar-brand px-3" href="#" data-toggle="tooltip" data-placement="bottom" title="Visit our homepage" style={{ color: 'white' }}>bank of tirupur</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {ctx.activeUser ? (
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link px-3" href="#/deposit" data-toggle="tooltip" data-placement="bottom" title="Make a deposit" style={navLinkStyle}>Deposit</a>
                            <a className="nav-item nav-link px-3" href="#/withdraw" data-toggle="tooltip" data-placement="bottom" title="Make a withdraw" style={navLinkStyle}>Withdraw</a>
                            <a className="nav-item nav-link px-3" href="#/allData" data-toggle="tooltip" data-placement="bottom" title="View data for all users" style={navLinkStyle}>AllData</a>
                            <button type="submit" className="btn btn-outline-info btn-sm" onClick={handleClick} style={logoutButtonStyle}>Logout</button>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link px-3" href="#/CreateAccount" data-toggle="tooltip" data-placement="bottom" title="Create a new account" style={navLinkStyle}>Create Account</a>
                            <a className="nav-item nav-link px-3" href="#/login" data-toggle="tooltip" data-placement="bottom" title="Access your account" style={navLinkStyle}>Login</a>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
