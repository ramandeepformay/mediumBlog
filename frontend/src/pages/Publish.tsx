import { ChangeEvent, useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL_BLOG } from "../config";
import {  useNavigate } from "react-router-dom";


const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate =useNavigate()
    const name = localStorage.getItem("name") || "";

    
    return <div>
        <div>
            <Appbar authorName={name[0].toUpperCase()}/>
        </div>
        <div>
            <div className=" mt-16 mb-6 flex flex-col justify-center items-center w-full">
                <div className="max-w-screen-md w-full">
                    <input type="text" className=" border border-gray-300  text-sm rounded-lg   block w-full p-2.5 focus:outline-none" placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="max-w-screen-md w-full">
                    <TextEditor onChange={(e) => { setContent(e.target.value) }} />
                </div>
                <div>
                    <PublishButton onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL_BLOG}`,
                            {
                                title,
                                content
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                }
                            })
                            navigate(`/blog/${response.data.id}`)
                    }} />
                </div>
            </div>
        </div>
    </div>
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return <form>
        <div className="py-8 bg-white rounded-b-lg">
            <textarea id="editor" rows={12} className="block w-full px-0 text-sm text-gray-800 bg-white border d pl-6 pt-6 focus:outline-none" placeholder="Write a blog.." required
                onChange={onChange} />
        </div>
    </form>
}
function PublishButton({ onClick }: { onClick: (e: React.MouseEvent<HTMLElement>) => void }) {
    return <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 border border-blue-700 rounded"
            onClick={onClick}>
            Publish blog
        </button>
    </div>
}
export default Publish;