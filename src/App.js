import {NavBar} from "./components/NavBar"
import Main from "./components/Layout/Main"
import Section from "./components/Section"
import Footer from "./components/Layout/Footer";


function App() {
  return (
    <div className="App">
        <NavBar /> 
        <Main />
        <Section
          isBanner={false}
          className="section-why"
          />
        <Section
          isBanner={false}
          className="section-latest"      
        />    
        <Footer />
     
    </div>
  );
}

export default App;
