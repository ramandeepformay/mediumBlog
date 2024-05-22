import { Link } from "react-router-dom"

interface headerLabelType{
    headline:string,
    description:string,
    link:string,
    linkType:string
}
const Header = ({headline, description, link, linkType}:headerLabelType) =>{
    return <>
        <div className="text-center">
            <div className="text-3xl font-bold">
                {headline}
            </div>
            <div className="text-slate-400">
                {description} <Link to={linkType} className="underline">{link}</Link>
            </div>
        </div>
    </>
}

export default Header