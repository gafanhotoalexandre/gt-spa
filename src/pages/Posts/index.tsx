import { Link } from 'react-router-dom'
import { slugify } from '../../utils'

import './Posts.css'

const mockedPosts = [
  'Um título qualquer',
  'Terraplanista cabeça ôca',
  'Teoricamente sim e teoricamente não',
]

export function PostsPage() {
  return (
    <div className='posts-page'>
      <h2>Página de Posts</h2>
      <div className='posts-list'>
        {mockedPosts.map((title) => {
          const slug = slugify(title)

          return (
            <div key={slug} className='post-item'>
              <h3>
                <Link to={`/posts/${slug}`}>{title}</Link>
              </h3>
              {/* <p>{post.content}</p> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
