import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import NewToDo from "./NewTodo"
import SideBar from "./Sidbar"

const ToDo = () => {
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        const config = {
            headers: {
                authorization: token
            }
        }
        axios.get("https://backend-0v1r.onrender.com/todopost", config).then((res) => {
            setdata(res.data.todo)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    // const Start = ()=>{
    //     setInterval(()=>{
           
    //     }, 1000)
    // }

    console.log(data)
    return (
        <>
            <div className="main-div">
                <nav className="navbar" >
                    <p style={{float:"right", "marginRight":"80px"}}>USER NAME</p>
                </nav>
                <Link to="/newtodo">
                    <button style={{  margin: "30px 0px", "width": "120px", "height": "30px" }}>Add New Ativity</button>
                </Link>
                <table >
                    <tr >
                        <th >Activity</th>
                        <th >Status</th>
                        <th>Time Taken</th>
                        <th>Action</th>
                    </tr>
                    {data.map((items, i) => {
                        return (
                            <tr>
                                <td >{items.activity}</td>
                                <td>{items.Status}</td>
                                <td></td>
                                <td>start</td>
                            </tr>
                        )
                    })}

                </table>
                <SideBar />

            </div>
        </>
    )
}
export default ToDo