import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { AppLayout as Root } from './layouts/AppLayout'
import { AboutPage } from './pages/About'
import { PostsPage } from './pages/Posts'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'
import { PostPage } from './pages/Post'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<NotFoundPage />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/sobre' element={<AboutPage />} />
      <Route path='/posts' element={<PostsPage />} />

      <Route path='/posts/:slug' element={<PostPage />} />
    </Route>
  )
)
