import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function CreateAccount() {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label + ' required');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        if (label === 'email') {
            var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (!field.match(emailFormat)) {
                setStatus('Error: Enter a valid email address');
                setTimeout(() => setStatus(''), 3000);
                return false;
            }
        }
        if (label === 'password' && field.length < 8) {
            setStatus('Error: Password must be 8 or more characters long');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate() {
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.setUsers((existingState) => [
            ...existingState,
            { name, email, password, balance: 100 },
        ]);
        alert('Successfully created account!');
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    const animatedContainerStyle = {
        maxWidth: '500px',
        margin: '8em auto',
        padding: '25px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundSize: 'cover',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb_CBD8E09ZL6EV7Hxr9NQsbt4Hiy1zkbQQ&usqp=CAU")`,
        animation: `${show ? 'fadeIn 1s ease-in-out, glow 1.5s infinite alternate, rotateContainer 4s linear' : 'fadeOut 1s ease-in-out'}`,
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        fontSize: '16px',
    };

    const inputStyle = {
        margin: '5px',
        padding: '10px',
        borderRadius: '3px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#333',
    };

    const buttonStyle = {
        margin: '10px',
        padding: '10px 20px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: '#f0f0f0',
        color: '#333',
        cursor: 'pointer',
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
    };

    return (
        <div style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/banking-hd-8k-wall-paper-stock-photographic-image_890746-99545.jpg?w=1060")`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="container" style={animatedContainerStyle}>
                <h3>Create Account</h3>
                <div>
                    Name<br />
                    <input type="text" style={inputStyle} id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
                    Email address<br />
                    <input type="email" style={inputStyle} id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
                    Password<br />
                    <input type="password" style={inputStyle} id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
                    <button type="button" style={buttonStyle} onClick={handleCreate} disabled={!name || !email || !password}>Create Account</button>
                </div>
                {!show && (
                    <>
                        <h5>Success</h5>
                        <button type="button" style={buttonStyle} onClick={clearForm}>Add another account</button>
                    </>
                )}
                {status && <p>{status}</p>}
            </div>
        </div>
    );
}

export default CreateAccount;
