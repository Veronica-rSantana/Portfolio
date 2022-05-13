import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Views/Home.jsx';
import Trajetoria from './Views/Trajetoria.jsx';
import Projetos from './Views/Projetos.jsx';
import Contato from './Views/Contato';
import Menu from './Components/Menu';
import Footer from './Components/Footer.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Trajetoria" element={<Trajetoria/>} />
            <Route path="/Projetos" element={<Projetos/>} />
            <Route path="/Contato" element={<Contato/>}/>   
      </Routes>
     
      <Footer></Footer>
      </BrowserRouter>
      
   </>
  )
}

export default App