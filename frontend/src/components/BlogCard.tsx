import { Link } from "react-router-dom"
interface blogCardType {
    authorName: string,
    publishDate: string,
    title: string,
    content: string,
    id: string
}

const BlogCard = ({ authorName, publishDate, title, content, id }: blogCardType) => {
   
    return <>
        <Link to={`/blog/${id}`}>
            <div className="border-b border-slate-200  p-4 m-2 w-screen max-w-md cursor:pointer">
                <div className="flex justify-between items-center w-auto ">
                    <Avatar authorName={authorName} />
                    <div className="text-lg ">{upperCaseConverter(authorName)}</div>
                    <div className="w-1 h-1 rounded-full bg-slate-400 self-center"></div>
                    <div className=" text-slate-400 text-lg font-thin ">
                        {publishDate}
                    </div>
                </div>
                <div className="mt-2 text-3xl font-bold">
                    {upperCaseConverter(title)}
                </div>
                <div className="mt-1 text-md ">
                    {content.length > 100 ? `${upperCaseConverter(content).slice(0, 100)}...` : upperCaseConverter(content)}
                </div>
                <div className="my-2 font-thin text-slate-400">
                    {`${Math.ceil(content.length / 100)}mins`}
                </div>

            </div>
        </Link>

    </>
}

export const Avatar = ({ authorName, onClick, type }: { authorName: string, onClick?: () => void, type?: string }) => {
    return <div>
        <div className="hs-dropdown relative inline-flex">
            {type == "app" ?
                <div className="relative inline-flex items-center justify-center w-10 h-10    overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" onClick={onClick} >
                    <span className="font-medium text-gray-600 dark:text-gray-300" >{authorName.slice(0, 1)}</span>
                </div> :
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-4" >
                    <span className="font-medium text-gray-600 dark:text-gray-300">{authorName.slice(0, 1).toLocaleUpperCase()}</span>
                </div>}
        </div>

    </div>
}

const upperCaseConverter = (label: string) => {
    if (label.length > 0) {
        return label[0].toUpperCase() + label.slice(1);
    }
    else return "";
    
}

export default BlogCard