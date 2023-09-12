import './App.css'
import { Outlet } from 'react-router-dom'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'

function App(){

  return(
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
export default App