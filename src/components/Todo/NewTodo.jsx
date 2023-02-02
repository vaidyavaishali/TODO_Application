import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './todo.css'
const NewToDo = () => {
    const [input, setInput] = useState({ activity: "" })
    const navigate = useNavigate()
    const token = window.localStorage.getItem("token")
    // console.log(token)
    const config = {
        headers: {
            authorization: token
        }
    }
    const AddToDo = () => {
        axios.post("https://backend-0v1r.onrender.com/todopost", input, config).then((res) => {
            console.log(res.status)
            if (res.status == 200) {
                alert("Add to do SuccessFully")
                navigate("/todo")
            }
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <>
            <div className="newtodo" style={{ "textAlign": "center", "margin": "50px auto 0", height: "100px", width: "300px", border: "2px solid black", background: "grey", "border-radius": "10px" }}>
                <input type="text" placeholder="Add New Activity" onChange={(e) => { setInput({activity: e.target.value }) }} style={{ "height": "20px", "width": "200px", margin: "10px auto 0" }} />
                <button onClick={AddToDo}>Add New Ativity</button>

            </div>
        </>
    )
}
export default NewToDo