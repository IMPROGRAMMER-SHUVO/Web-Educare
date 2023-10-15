
import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const navigation=useNavigate()

  return (
    <div>
<Header></Header>
<div>{navigation.state==='loading'&&'Loading....'}</div>
<Outlet></Outlet>

<Footer></Footer>


    </div>
  
  )
}

export default App
