import { ChangeEvent } from "react"

interface InputBoxType{
    label:string,
    placeholder:string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputBox =({label, placeholder, onChange}:InputBoxType)=>{
    return  <>
        <div className="my-2">
            <div className="font-bold">
                {label}
            </div>
            <div>
                <input type={label == "Password" ? "password" : "text"} placeholder={placeholder} className="w-full border my-2 px-4 py-2 rounded-md" onChange={onChange}/>
            </div>
        </div>
    </>
}

export default InputBox