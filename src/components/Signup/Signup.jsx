import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'
const Signup = () => {
    const [input, setInput] = useState({ email: "", password: "", confirm_Password: "" })
    const navigate = useNavigate()

    const SignUpSubmit = (e) => {
    
        if (validateUser(input)) {
            axios.post("https://backend-0v1r.onrender.com/register", input).then((res) => {
                console.log(res.status)
                if (res.status == 200) {
                    alert("registerd successFully")
                    navigate("/")
                }
            }).catch((e) => {
                console.log(e)
            })
        }
    }
    let validateUser = (value) => {
        if (!value.email) {
            alert("email is require")
            return 0
        } else if (!value.password) {
            alert("password is require")
            return 0
        } else if (value.password.length < 6) {
            alert("length should be greater than 6")
            return 0
        } else if (value.password !== value.confirm_Password) {
            alert("password doesnt match")
            return 0
        }
        return 1
    }

    return (
        <>
            <div style={{ "width": "300px", "height": "auto", "boxShadow": "5px 5px 5px #cccc", "margin": "100px auto", borderRadius: "20px", padding: "30px", textAlign: "center", "position": "relative" }}>
                <h3>Register</h3>
                <div className="email div">
                    <input type="text" placeholder="Enter email Adderss" onChange={(e) => { setInput({ ...input, email: e.target.value }) }} />
                </div>
                <div className="password div">
                    <input type="password" placeholder="Enter password" onChange={(e) => { setInput({ ...input, password: e.target.value }) }}></input>
                </div>
                <div className="con_pass div">
                    <input type="password" placeholder="confirm password" onChange={(e) => { setInput({ ...input, confirm_Password: e.target.value }) }}></input>
                </div>
                <button className='reg-btn' onClick={SignUpSubmit}>Register</button>
                <Link to="/">
                    <p style={{ color: "red" }}>Member Login</p>

                </Link>

            </div>
        </>
    )
}
export default Signup