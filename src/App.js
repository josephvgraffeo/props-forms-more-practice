import Greeting from './components/Greeting';
import NameTag from './components/NameTag';
import UserForm from './components/UserForm';
import './App.css';

const personObj = {
  firstName: "Bill", 
  lastName: "Bob",
  email: "fake1@email.com",
  favColor:"Red",
  date: "02/06/2023"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <NameTag 
          firstName="Joe" 
          lastName="Graffeo"
          email="fake@email.com"
          favColor="Blue"
          date="02/06/2023"
        />
        <UserForm />
      </header>
    </div>
  );
}

export default App;
