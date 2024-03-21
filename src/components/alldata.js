import React, { useContext } from "react";
import { UserContext } from "./context";

function AllData() {
    const ctx = useContext(UserContext);

    let users = ctx.users;

    const containerStyle = {
        backgroundImage: "url(https://arizent.brightspotcdn.com/dims4/default/2b91073/2147483647/strip/true/crop/1000x667+0+0/resize/740x494!/quality/90/?url=https%3A%2F%2Fsource-media-brightspot.s3.us-east-1.amazonaws.com%2Ff1%2F1a%2Fbfbce98e4d91af1d2d70db982a5f%2Fadobestock-581301793-preview.jpeg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
    };

    const tableStyle = {
        margin: "20px auto",
        borderCollapse: "collapse",
        width: "100%",
        maxWidth: "800px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    };

    const thStyle = {
        backgroundColor: "#f2f2f2",
        color: "red", // Change text color to red
        padding: "12px 15px",
        textAlign: "left",
        fontWeight: "bold",
    };

    const tdStyle = {
        borderBottom: "1px solid #ddd",
        padding: "12px 15px",
        textAlign: "left",
        color: "red", // Change text color to red
    };

    return (
        <div className="container" style={containerStyle}>
            <h1 style={{ color: "red" }}>All Data</h1> {/* Change header text color to red */}
            <table className="table" style={tableStyle}>
                <thead>
                    <tr>
                        <th scope="col" style={thStyle}>Name</th>
                        <th scope="col" style={thStyle}>Email</th>
                        <th scope="col" style={thStyle}>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{user.name}</td>
                            <td style={tdStyle}>{user.email}</td>
                            <td style={tdStyle}>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllData;
