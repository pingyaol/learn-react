import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {

  return(
    <>
      <Card />
      <Button />
      <Student name="Pingyao" age={30} isStudent={true}/>
    </>
    
  ); 
}

export default App
