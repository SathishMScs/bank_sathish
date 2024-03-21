import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Withdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;

    function makeWithdraw() {
        if (!activeUser) {
            // Display alert if no user is logged in
            alert('Please log in to make a withdrawal.');
            return;
        }

        if (withdrawAmount <= 0) {
            alert('Enter a positive number.');
            return;
        }

        if (withdrawAmount > activeUser.balance) {
            alert('Insufficient funds.');
            return;
        }

        // Update balance in user context
        activeUser.balance -= withdrawAmount;
        alert('The withdrawal was processed.');
        
        // Reset form
        setWithdrawAmount(0);
        document.getElementById('withdraw').value = '';
    }

    const containerStyle = {
        backgroundImage: "url(https://media.istockphoto.com/id/867549954/photo/four-girl-friends-withdrawing-money-from-credit-card-at-atm.jpg?s=612x612&w=0&k=20&c=IAW2BwywYZ2irzevQ3CK_Vnv-Vc4rDz-xVC7RFIM6s0=)", // Replace 'https://example.com/background-image.jpg' with the actual URL of your background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Adjust as needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const infoStyle = {
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        maxWidth: "400px",
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="info" style={infoStyle}>
                <h5>Withdraw</h5>
                <p>Account Balance: $ {activeUser ? activeUser.balance : '--'}</p>
                <label>Withdraw Amount</label>
                <input type="number" className="form-control" id="withdraw" placeholder="Enter amount" onChange={e => setWithdrawAmount(Number(e.currentTarget.value))} />
                <button type="submit" className="btn btn-light mt-3" onClick={makeWithdraw} disabled={withdrawAmount ? false : true}>Withdraw</button>
            </div>
        </div>
    );
}

export default Withdraw;
