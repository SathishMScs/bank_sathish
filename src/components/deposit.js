import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Deposit() {
    const [depositAmount, setDepositAmount] = useState(0);
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;

    function makeDeposit() {
        if (depositAmount > 0) {
            // Avoid directly mutating state, create a new object instead
            const updatedUser = { ...activeUser, balance: activeUser.balance + depositAmount };
            ctx.setActiveUser(updatedUser); // Update the activeUser in context
            alert('The deposit was successfully received.');
        } else {
            alert('Deposit values cannot be negative.');
        }
        setDepositAmount(0); // Reset the input field
    }

    const containerStyle = {
        backgroundImage: "url(https://www.gannett-cdn.com/-mm-/829fb8d15c3ec6764eb5613d3c6db6aab29eb4a0/c=0-40-770-473/local/-/media/2017/11/21/USATODAY/usatsports/atm-eats-deposit-contact-financial-institution-immediately-story-770x512.jpg?width=3200&height=1680&fit=crop)", // Ensure the URL is correct
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="info" style={{ marginTop: "20px" }}>
                <h5 style={{ marginBottom: "10px" }}>Deposit</h5>
                <p>Account Balance: $ {activeUser ? activeUser.balance : '--'}</p>
                <label style={{ marginBottom: "5px" }}>Deposit Amount</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                    value={depositAmount} // Use value prop to reflect state
                    onChange={e => setDepositAmount(Number(e.currentTarget.value))}
                />
                <button
                    type="button"
                    className="btn btn-light"
                    style={{ marginTop: "10px" }}
                    onClick={makeDeposit}
                    disabled={!depositAmount} // Simplified condition
                >
                    Deposit
                </button>
            </div>
        </div>
    );
}

export default Deposit;
