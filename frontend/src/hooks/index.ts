import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL_BLOG } from "../config";
interface Blog {
    content: string,
    author: { name: string },
    title: string,
    id: string
}
const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL_BLOG}/bulk`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }

            })
                .then(response => {
                    setBlogs(response.data.blogs)
                    setLoading(false)
                })
            console.log(`Bearer ${localStorage.getItem("token")}`)
        } catch (e) {
            console.error(e)
        }
    }, [])

    return { loading, blogs }
}

const useSingleBlog = ( {id} : { id: string }) => {
    console.log(id)
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    useEffect(() => {
        axios.get(`${BACKEND_URL_BLOG}/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlog(response.data.blog)
                setLoading(false)
            }
            )
    }, [id])
    return { loading, blog };
}

export { useSingleBlog, useBlogs }