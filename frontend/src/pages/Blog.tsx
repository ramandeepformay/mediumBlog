import { useParams } from "react-router-dom"
import { useSingleBlog } from "../hooks"
import DetailBlog from "../components/DetailBlog"


const Blog = () => {
    const { id } = useParams()
    console.log
    const { loading, blog } = useSingleBlog({id:id || ""})
    if (loading) {
        return <div>
            Loading..
        </div>
    }
    return <div>
        <DetailBlog blog={blog}/>
    </div>
}

export default Blog;