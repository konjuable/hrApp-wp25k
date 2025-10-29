import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import employeeData from "./assets/employeeData.json"
import PersonList from './components/PersonList'

const App = () => {

  return (
    <>
      <Header />
      <PersonList employees={employeeData} />
      <Footer />
    </>
  )
}

export default App
