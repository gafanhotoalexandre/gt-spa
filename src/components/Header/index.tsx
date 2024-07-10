import { Link } from 'react-router-dom'

import './Header.css'

export function Header() {
  return (
    <header>
      <div>
        <h2 id='logo'>
          <Link to='/'>LOGO</Link>
        </h2>
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
      </div>
    </header>
  )
}
