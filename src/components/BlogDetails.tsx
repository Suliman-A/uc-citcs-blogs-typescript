import { useState, useEffect } from "react"
import { Blog } from "./Home"
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export interface BlogProps extends RouteComponentProps<{ id: string; }>{}

const BlogDetails: React.FC<BlogProps> = ({history, match: { params: { id } } }) => {


    const [blog, setBlog] = useState<Blog>({
        id: 1,
        title: "",
        body: "",
        author: ""
    });

    const getBlog = async () => {
        const url = `http://localhost:8000/blogs/${id}`;
        let response = await fetch(url);
        let blog = await response.json();
        setBlog(blog);
    }

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    useEffect(() => {
        getBlog()
    }, [id])

    return ( 
        <div className='blog-details'>
      
        
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <br />
                <hr />
                <div>{blog.body}</div>
            </article>
                <br />
                <hr />
                <br />
        <button onClick={handleDelete}>Delete</button>
        
        <Link 
        to={`/update/${id}`}
        style={{ marginLeft: '8px' }}
        >Update</Link>
        </div>
     );
}
 
export default withRouter(BlogDetails) ;