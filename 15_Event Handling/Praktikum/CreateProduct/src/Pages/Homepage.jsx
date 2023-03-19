import '../App.css'
import Navbar from "../Components/Navbar/Navbar"
import Form from '../Components/Form/Form-validation'
import Table from '../Components/Table/Table'
import Logo from '../assets/bootstrap-logo.svg.png'
import Footer from '../Components/Footer/Footer'
import Button from '../Element/Button'
import RandomNumber from '../Components/randomNumber/randomNumber'
import ToggleArtikel from '../Components/Article/ToggleArticle'


const Homepage = () => {
    return(
        <div className="Homepage">
        <Navbar />
       
        <div className="container text-center">
            <img src={Logo} className="mx-auto mt-3 d-block img-fluid"/>
        <div className="container">
        <ToggleArtikel />
        <br /><br />
        </div>
        </div>
        
        <Form />
        <RandomNumber />
       
        <br/><br/>
        <Table />
        <Footer />
      


        </div>
    )
}

export default Homepage