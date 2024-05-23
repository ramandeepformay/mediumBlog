import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import InputBox from "./inputBox";
import { SignUpSchema } from "ramandeep-formay-medium";
import axios from "axios";
import { BACKEND_URL_USER } from "../config";
import { Link, useNavigate } from "react-router-dom";

const AuthSignup = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignUpSchema>({
        name: "",
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    // sending the req to backend
    const sendRequest = async () => {
        setLoading(true)
        try {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
            const response = await axios.post(`${BACKEND_URL_USER}/signup`, postInputs)
            const jwt = await response.data.token

            console.log(jwt)
            localStorage.setItem("token", jwt)
            navigate("/blogs", { state: { name: postInputs.name }})

        } catch (e) {
            alert("Error while sign up")
        }
    }

    return <>
        {console.log(postInputs.name)}
        <div className=" max-w-2xl h-screen mx-auto flex flex-col justify-center">
            <div className="max-w-xl mx-10">
                <div>
                    <Header headline="Create an account" description="Already have an acccout?" link="Login" linkType="/signin" />
                </div>

                <div>
                    <InputBox label="Name" placeholder="Enter your name" onChange={(e) => {
                        setPostInputs((c) => ({
                            ...c,
                            name: e.target.value
                        }))
                    }} />
                </div>

                <div>
                    <InputBox label="Email" placeholder="m@type.com" onChange={(e) => {
                        setPostInputs((c) => ({
                            ...c,
                            username: e.target.value
                        }))
                    }} />
                </div>

                <div>
                    <InputBox label="Password" placeholder="Password" onChange={(e) => {
                        setPostInputs((c) => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                </div>
                <Link to={"/publish"} state={{name:postInputs.name}}>
                
                </Link>
                <div>
                    <Button label="Signup" onClick={sendRequest} loading={loading} />
                </div>
              
                
            </div>
        </div>
    </>
}

export default AuthSignup;