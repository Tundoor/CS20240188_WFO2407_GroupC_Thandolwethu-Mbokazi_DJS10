import { useState, useEffect } from 'react';

function App() {
    
   const [ blogs, setState ] = useState(null)
   
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => setState(data))
    } , [])

  return (
  <div className='blog'>
    <h1>Posts</h1>
       {blogs && blogs.map((blog) => {
         return (
          <>
          <h2>{blog.id}. {blog.title}</h2>
          <p>{blog.body}</p>
          </>
         )
       }) }
  </div>
  )
}

export default App
