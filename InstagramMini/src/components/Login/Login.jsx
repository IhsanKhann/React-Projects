import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import './Login.css'; // Make sure the path is correct

function Login() {
    const { setuser, setlogin } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setuser({ username, password });
        setlogin(true);
    };

    return (
        <div className="login-wrapper">
            <div className="login-logo">Instagram</div>

            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Log In
                </button>
            </form>
        </div>
    );
}

export default Login;
