import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";
import BlogsSkelton from "../components/BlogsSkeleton";


const blogs = () => {
    const { loading, blogs } = useBlogs();
    const name = localStorage.getItem("name") || "";

    if (loading) {
        return <div>
            <BlogsSkelton />
        </div>
    }
    return <>
        {/* appbar component */}
        <div>{
            blogs.length > 0 &&
            <Appbar authorName={name[0].toUpperCase() } />
        }

        </div>

        {/* blogs mapping */}
        <div className="flex justify-center">
            <div className=" flex flex-col justify-center items-center">
                {blogs.map((blog, ids) => <BlogCard
                    key={ids}
                    authorName={blog.author.name || "da"}
                    publishDate={"23rd May 2024"}
                    title={blog.title}
                    content={blog.content}
                    id={blog.id}
                />)}
            </div>

        </div>

    </>
}

export default blogs;