import { useState, useEffect } from 'react';

function App() {

  const [blogs, setState] = useState(null)
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) {
          throw Error("Data Fetching Failed") // This will be our error message
        }
        return res.json()
      })
      .then(data => {
        setState(data);
        setLoading(false)
      }
      )
      .catch((error) => {
        setError(error.message)
        setLoading(false); // This ensures loading doesnt show and instead the error message
      }
      )
  }, [])

  return (
    isloading ? (
      <div>Loading...</div> // Show the loading message when isloading is true
    ) : error ? (
      <h1 style={{ fontSize: '3rem' }}>{error}</h1>)
      : (
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
