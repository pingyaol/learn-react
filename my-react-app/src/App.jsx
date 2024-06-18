import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="BroCode" /> 
    </>
  ); 
}

export default App

/*
<Card />
      <Button />
      <Student name="Abby" age={30} isStudent={true}/>
      <Student name="Bessie" age={16} isStudent={true}/>
      <Student name="Callie" age={16} isStudent={true}/>
      <Student name="Debbie" age={17} isStudent={true}/>
      <Student  />

*/ 