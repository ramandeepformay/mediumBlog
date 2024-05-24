import { useNavigate } from "react-router-dom";


const Dropdown =({isVisible}:{isVisible:boolean}) =>{
    const navigate = useNavigate();
    const handleSignout = () => { 
        localStorage.setItem("token", "");
        localStorage.setItem("name","");
        navigate("/signin")

    }
    return <>
        {isVisible?(
            <ul className=" dropdown-menu absolute z-20 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-red-700 text-white">
                <li className=" p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg text-center" onClick={handleSignout}>Sign out</li>
            </ul>
        ):null}
    </>
}


export default Dropdown;