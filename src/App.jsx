import './App.css';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import Modal from './components/Modal';
import { useState } from 'react';
import like from './icons/icons8-like-50.png'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');

  const toggleShowModal = () => {
    setShowModal(!showModal);
    
  }

  const submitPost = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    addPost({post});
    console.log(posts);
    setPost('');

  }

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = { id, ...post};
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <Header />
      <CreatePost 
        toggleShowModal={toggleShowModal}
      />
      <Modal 
        show={showModal} 
        submitPost={submitPost}
        toggleShowModal={toggleShowModal} 
        post={post}
        setPost={setPost}
      />
      <div className='post-display'>
        {posts.map((item) => {
          return (
            <div className='post'>
              <div className='post-header'>
                <div className='profile-image'></div>
                <h3>Profile Name</h3>
              </div>
              <div className='item-post'>
                {item.post}
              </div>
              <div className="post-footer">
                <div className="like-btn">
                <p>Like</p>
                  <img src={like} alt="like" className='like-icon'/>
                </div>
                <div className="post-actions-holder">
                  <div className="post-actions"><p>Edit Post</p></div>
                  <div className="post-actions"><p>Delete Post</p></div>
                </div>
              </div>
              
            
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
