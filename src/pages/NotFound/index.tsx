import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import './NotFound.css'

export function NotFoundPage() {
  const error = useRouteError()
  console.error(error)

  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}`
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else {
    console.error(error)
    errorMessage = 'Erro desconhecido'
  }

  return (
    <div id='error-page' className='notfound-container'>
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <a href='/' className='back-home'>
        Voltar para a página inicial
      </a>
    </div>
  )
}
