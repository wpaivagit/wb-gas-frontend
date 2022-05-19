
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {


  return (
    <Router>
      <NavBar />
      <Container customClass="minHeight">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/company' element={<Company />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* <Route path='/newproject' element={<NewProject />} /> */}
          {/* <Route path='/projects' element={<Projects />} /> */}
        </Routes>
      </Container>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
