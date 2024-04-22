import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import {useBlogs} from "../hooks";


const blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            loading...
        </div>
        
    }
    return <div>
        <div >
            <Appbar authorName={blogs[0].author.name}/>
        </div>
        <div className="flex justify-center ">
            <div className=" flex flex-col justify-center items-center">
                {blogs.map((blog,ids) => <BlogCard
                    key ={ids}
                    authorName={blog.author.name || "da"}
                    publishDate={"ddsds"}
                    title={blog.title}
                    content={blog.content}
                    id={blog.id}
                />)}
        
            </div>
        </div>
    </div>


}

export default blogs;