import { useNavigate } from "react-router-dom"

const SideBar = ()=>{
    const navigate = useNavigate()

    const Logout = ()=>{
        window.localStorage.removeItem("token")
        navigate('/')
    }

    return(
        <>
        <nav style={{height:"100vh", "width":"30vh", "background":"grey" ,"position":"absolute", top:"145px"}}>
            <h3>To Do List</h3>
            <h4>history</h4>
            <h4 onClick={Logout} style={{marginTop:"400px"}}>LogOut</h4>
        </nav>
        </>
    )
}
export default SideBar