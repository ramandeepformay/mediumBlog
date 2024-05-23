import { useParams } from "react-router-dom"
import { useSingleBlog } from "../hooks"
import DetailBlog from "../components/DetailBlog"
import DetailBlogSkeleton from "../components/DetailBlogSkeleton"

const Blog = () => {
    const { id } = useParams()
    console.log
    const { loading, blog } = useSingleBlog({id:id || ""})
    if (loading) {
        return <div>
            <DetailBlogSkeleton/>
        </div>
    }
    return <div>
        <DetailBlog blog={blog}/>
    </div>
}

export default Blog;