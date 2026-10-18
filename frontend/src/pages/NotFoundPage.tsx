import {Link} from 'react-router'

export default function NotFoundPage(){
    return(
    <div className = "text-center py-20">
    return <h1 className = "text-3x1 font-bold">Page not found</h1>
    <Link to ="/" className="underline">Back Home</Link>
    </div>
    )
}