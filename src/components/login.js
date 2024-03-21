import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const ctx = useContext(UserContext);

    function findUser() {
        let data = ctx.users;
        let matchingUser = data.find(user => loginEmail === user.email && loginPassword === user.password);
        ctx.setActiveUser(matchingUser);
        if (matchingUser === undefined) {
            alert('User not found.');
        }
    }

    const logoutUser = () => {
        ctx.setActiveUser(null);
        setLoginEmail('');
        setLoginPassword('');
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjust as needed
        backgroundImage: `url(https://wallpapercave.com/wp/wp4316583.jpg)`, // Set background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width:"1000vh"
    };

    return (
        <div className="container" style={containerStyle}>
            {!ctx.activeUser ? (
                <div className="text-white bg-info mb-3" style={{ padding: "20px", borderRadius: "5px", boxShadow: "0 0 10px 5px blue" }}>
                    <div className="card-header" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Login</div>
                    <div className="card-body">
                        <label htmlFor="email" className="form-label" style={{ marginBottom: "10px" }}>Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)} />
                        <label htmlFor="password" className="form-label" style={{ marginBottom: "10px" }}>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)} />
                        <button type="submit" className="btn btn-light mt-3" onClick={findUser}>Login</button>
                    </div>
                </div>
            ) : (
                <div className="text-white bg-info mb-3" style={{ padding: "20px", borderRadius: "5px", boxShadow: "0 0 10px 5px blue" }}>
                    <div className="card-header" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Welcome {ctx.activeUser.name}!</div>
                    <div className="card-body">
                        <button type="submit" className="btn btn-light" onClick={logoutUser}>Logout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
