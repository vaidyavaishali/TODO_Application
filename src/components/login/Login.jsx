import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const [input, setInput] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const LoginSubmit = () => {
        axios.post("https://backend-0v1r.onrender.com/login", input).then((res) => {
            if (res.status == 200) {
                alert("Login SuccessFully")
                console.log(res.data.token)
                window.localStorage.setItem("token", res.data.token)
                
                navigate("/todo")
            }
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <>
            <div style={{ "width": "300px", "height": "auto", "boxShadow": "5px 5px 5px #cccc", "margin": "100px auto", borderRadius: "20px", padding: "30px", textAlign: "center", "position": "relative" }}>
                <h3>Login</h3>
                <div className="email div">
                    <input type="text" placeholder="Enter email Adderss" onChange={(e)=>{setInput({...input, email:e.target.value})}}/>
                </div>
                <div className="password div">
                    <input type="password" placeholder="Enter password" onChange={(e)=>{setInput({...input, password:e.target.value})}} ></input>
                </div>
                <button className='reg-btn' onClick={LoginSubmit}>Login</button>
                <Link to="/signup">
                    <p style={{ color: "red" }}>Register</p>

                </Link>

            </div>
        </>
    )
}
export default Login