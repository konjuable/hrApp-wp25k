import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Person from "./components/Person"

const App = () => {

  return (
    <>
      <Header />
      <Person 
        name="Juha Konttinen" 
        title="Lecturer"
        salary="10 €"
        phone="040 730 6004"
        email="juha.konttinen@bc.fi"
        pet="dog"
      />
      <Footer />
    </>
  )
}

export default App
