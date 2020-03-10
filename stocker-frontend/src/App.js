import React, {useEffect} from 'react';
import './App.css';
import MainContainer from './containers/mainContainer';
import Navbar from './components/navBar';


function App() {

  // useEffect(() => {

  //   fetch("http://localhost:3000/api/v1/users")
  //     .then(resp => resp.json())
  //     .then(console.log)
  // })
  


  return (

    <div className="App">  
          <Navbar/>
          <MainContainer/>
    </div>
 
  );
}

export default App;
