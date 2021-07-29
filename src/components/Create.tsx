import { useState } from "react";
import { useHistory } from "react-router-dom";

export interface CreateProps {}
 
const Create: React.FC<CreateProps> = () => {


    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [author, setAuthor] = useState<string>('faculty');

    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('added');
        })

        history.push('/');
    }

    return ( 
        <div className='create'>
        <h2>Add new blog</h2>
        <form
            onSubmit={handleSubmit}
        >
            <label>Blog title:</label>
            <input
                type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value='faculty'>faculty</option>
                <option value='student'>student</option>
            </select>
            <button>Add blog</button>
        </form>
    </div>
     );
}
 
export default Create;