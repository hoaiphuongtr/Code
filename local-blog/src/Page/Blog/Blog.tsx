import CreatePost from 'Components/CreatePost'
import PostList from 'Components/PostList'
import './styles.css'
export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
