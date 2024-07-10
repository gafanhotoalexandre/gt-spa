import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import './App.css'

export function AppLayout() {
  return (
    <div className='app'>
      <Header />

      <div id='content'>
        <main>
          <Outlet />
        </main>

        <aside className='aside'>
          <div className='aside-content'>
            <h3>Conteúdo do Lado Direito</h3>
            <p>Este é um conteúdo de exemplo para o lado direito.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  )
}
