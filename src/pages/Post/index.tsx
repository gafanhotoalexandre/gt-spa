import { useParams } from 'react-router-dom'

import './Post.css'

const mockPost = {
  title: 'Exemplo de Postagem',
  content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vestibulum vehicula ex eu velit cursus, vitae viverra magna aliquam. 
    Mauris a risus a lorem dictum efficitur. Curabitur non dictum eros. 
    Integer ut scelerisque magna. Integer id efficitur metus. Nulla facilisi. 
    Pellentesque sit amet hendrerit orci, eget dictum neque. 
    Cras euismod sapien id augue ultricies porta. 
    Donec pulvinar tortor in eros dignissim, nec malesuada magna auctor.
  `,
}

export function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <article className='post-page'>
      <h2>slug: {slug}</h2>
      <h3>{mockPost.title}</h3>
      <div className='post-content'>
        <p>{mockPost.content}</p>
      </div>
    </article>
  )
}
