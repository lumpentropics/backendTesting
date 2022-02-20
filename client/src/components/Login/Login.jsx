import React from "react";

export default function Login () {
    return (
        <div>
            <h1>Super Secret Access</h1>
            <form>
                <input placeholder="username" type="text"></input>
                <input placeholder="password" type="text"></input>
                <button>LOG IN</button>
            </form>
            <h3>this is the login page, gateway to the universe of your private info</h3>
        </div>
    )
}