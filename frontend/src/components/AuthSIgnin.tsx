import { useState } from "react"
import Button from "./Button"
import Header from "./Header"
import InputBox from "./inputBox"
import { SignInSchema } from "ramandeep-formay-medium"
import axios from "axios"
import { BACKEND_URL_USER } from "../config"
import { useNavigate } from "react-router-dom"

const AuthSignin = () => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignInSchema>({
        username: "",
        password: ""
    })
    const sendRequest = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL_USER}/signin`, postInputs)
            const jwt = response.data.token
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (error) {
            alert("Error while signining in")
        }

    }
    return <div>
        <div className=" max-w-2xl h-screen mx-auto flex flex-col justify-center">
            <div className="max-w-xl mx-10">
                <div>
                    <Header headline="Login" description="Didn't have an account?" link="Signup" linkType="/signup" />
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
                    <Button label="Sign in" onClick={sendRequest} />
                </div>

            </div>

        </div>

    </div>

}

export default AuthSignin