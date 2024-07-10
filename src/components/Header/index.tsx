import { Link } from 'react-router-dom'

import './Header.css'

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/sobre'>Sobre</Link>
          </li>
          <li>
            <Link to='/posts'>Postagens</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
