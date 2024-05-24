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
    const [loading, setLoading] = useState(false)
    const [postInputs, setPostInputs] = useState<SignInSchema>({
        username: "",
        password: ""
    })

    // sending request to backend
    const sendRequest = async () => {
        setLoading(true)
        try {
            setTimeout(() => {
                setLoading(false)
            }, 5000)
            const response = await axios.post(`${BACKEND_URL_USER}/signin`, postInputs)
            const jwt = await response.data.token
            const name = await response.data.name
            localStorage.setItem("token", jwt)
            localStorage.setItem("name", name)
            navigate("/blogs")

        } catch (error) {
            alert("Error while signining in")
        }
    }

    return <>
        <div className="max-w-2xl h-screen mx-auto flex flex-col justify-center">
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
                    <Button label="Sign in" onClick={sendRequest} loading={loading}/>
                </div>
            </div>
        </div>
    </>
}

export default AuthSignin