import { useState, useEffect } from 'react';

function App() {

  const [blogs, setState] = useState(null)
  const [isloading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) {
          throw Error("Data Fetching Failed")
        }
        return res.json()
      })
      .then(data => {
        setState(data);
        setLoading(false)
      }
      )
  }, [])

  return (
    isloading ? (
      <div>Loading...</div> // Show the loading message when isloading is true
    ) : (
      <div className='blog'>
        <h1>Posts</h1>
        {blogs && blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.id}. {blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    )
  );
}

export default App
