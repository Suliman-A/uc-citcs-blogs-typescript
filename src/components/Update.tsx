import { useState, useEffect } from "react";
import { Blog } from "./Home"
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface UpdateProps extends RouteComponentProps<{ id: string; }>{}
 
const Update: React.FC<UpdateProps> = ({history, match: { params: { id } } }) => {

    const [blog, setBlog] = useState<Blog>({
        id: 1,
        title: "",
        body: "",
        author: ""
    });
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [author, setAuthor] = useState<string>('faculty');

    const getBlog = async () => {
        const url = `http://localhost:8000/blogs/${id}`;
        let response = await fetch(url);
        let blog = await response.json();
        setBlog(blog);
    }


    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch(`http://localhost:8000/blogs/` + id, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title, body, author })
        }).then(() => {
            history.push('/');
        })
    }
    
    useEffect(() => {
        getBlog()
    }, [id])

    return ( 
        <div className='update'>

            
                <form
                    onSubmit={handleUpdate}
                >
                    <label>Blog title:</label>
                    <input key={blog.title}
                        defaultValue={blog.title}
                        onChange={(e) => { setTitle(e.target.value) }} />

                    <label>Blog body:</label>
                    <textarea 
                        defaultValue={blog.body}
                        onChange={(e) => { setBody(e.target.value) }} >
                    </textarea>

                    <label>Blog author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value='faculty'>faculty</option>
                        <option value='student'>student</option>
                    </select>
                    <button>Save</button>
                </form>
            


        </div>
    );
    }
 
export default withRouter(Update);