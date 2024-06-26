import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

const DetailBlog = ({ blog }: any) => {

    return <div>
        <div>
            <Appbar authorName={upperCaseConverter(blog.author.name) || ""} />
        </div>

        <div className="grid grid-cols-12 w-full px-10 p-12">
            <div className="col-span-8 ">
                <div className="font-extrabold text-5xl">
                    {upperCaseConverter(blog.title)}
                </div>
                <div className="text-slate-400">
                    Posted on 23rd Dec
                </div>
                <div className="pt-4">
                    {upperCaseConverter(blog.content)}
                </div>
            </div>
            <div className="col-span-4 ">
                <div className="my-2 font-semibold">
                    Author
                </div>
                <div className="flex justify-start items-center">
                    <div className="w-8 h-8 bg-slate-300 border rounded-full">
                       
                        <Avatar authorName={blog.author.name.toUpperCase()}/>
                    </div>
                   <div className="ml-4">
                        <div className="text-2xl font-extrabold">
                            {upperCaseConverter(blog.title)}
                        </div>
                        <div className="text-slate-300">
                            Random phrase
                        </div>
                   </div>
                   
                </div>
                
            </div>
        </div>

    </div>
}

const upperCaseConverter =(label:string) =>{
    if(label.length>0){
        return label[0].toUpperCase()+label.slice(1);
    }
}

export default DetailBlog;