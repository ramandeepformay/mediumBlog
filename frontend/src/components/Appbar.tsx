
import { Link} from "react-router-dom";
import { Avatar } from "./BlogCard";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Appbar = ({authorName}:{authorName:string}) => {
    const [visible, setVisible] =useState(false)
    const toggle =() =>{
        setVisible(!visible)
    }
    return <>
        <div className="flex justify-between mx-4 p-4 border-b-2 mb-4">
            <Link to={"/blogs"}>
                <div className="text-2xl font-semibold">
                    Medium
                </div>
            </Link>

            <div className="flex items-center">
                <div className="mx-2">
                    <Link to={"/publish"}>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 ">New</button>
                    </Link>

                </div>
                <div className="mr-6">
                    <Avatar authorName={authorName} onClick={toggle} type="app"/>
                    <Dropdown isVisible={visible}  />
                </div>

            </div>
        </div>
    </>
}

export default Appbar;