import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);
  const handleClick = () => setIdFromBtnClick(id);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, [idFromBtnClick])
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>Fetch post</button>
      <div>
        {post.title}
      </div>
      {/* <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
