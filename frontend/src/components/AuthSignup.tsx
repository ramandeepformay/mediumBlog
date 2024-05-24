import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import InputBox from "./inputBox";
import { SignUpSchema } from "ramandeep-formay-medium";
import axios from "axios";
import { BACKEND_URL_USER } from "../config";
import { useNavigate } from "react-router-dom";

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
            const name = await response.data.name
            localStorage.setItem("token", jwt)
            localStorage.setItem("name", name)
            navigate("/blogs")

        } catch (e) {
            alert("Error while sign up")
        }
    }

    return <>
   
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
                
                <div>
                    <Button label="Signup" onClick={sendRequest} loading={loading} />
                </div>
              
                
            </div>
        </div>
    </>
}

export default AuthSignup;