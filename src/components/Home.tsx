import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

// ts interface to define app properties
export interface Blog  {
  title: string;
  body: string;
  author: string;
  id: number
}

export interface BlogsProps {}

// typescript funtion component
const Home: React.FC<BlogsProps> = (props) => {
  
 const [blogs, setBlogs] = useState<Blog[]>([]);

  // GET: read api resource
  const getBlogs = async () => {

    const url = `http://localhost:8000/blogs`
    let response = await fetch(url);
    let blogs = await response.json();
    setBlogs(blogs);

  }

  

  useEffect(() => {
    getBlogs();
  }, [])

    return (
        <div className='home'>
          <h2>Yes<span>UC</span>an</h2>
          <div className="blog-list" >
            {
            // loop through an arr of objects
            blogs.map(blog => (    
            <div className="blog-preview" key={ blog.id }
            // conditional randering 
            style={{ backgroundColor: blog.author === 'faculty' ? '#b3d3b0' : 'white'}}>
              <Link to={`/blogs/${blog.id}`}>     
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              </Link> 
            </div>
          ))
          }

          </div >
  
        </div>
    )
}

export default Home

