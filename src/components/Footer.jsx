import './Footer.css'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function Footer () {

  const {filters} = useContext(FiltersContext)

  return (
    <footer className='footer'>
      <h5>{JSON.stringify(filters)}</h5>
    </footer>
  )
}