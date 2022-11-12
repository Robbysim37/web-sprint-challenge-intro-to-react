import axios from 'axios';
import React, {useState,useEffect} from 'react';
import CharacterBackground from './components/CharacterBackground';
import Character from './components/Character';

const SWAPIPeopleurl = "https://swapi.dev/api/people/"



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.  
  const [SWAPIPeople, setSWAPIPeople] = useState()

  useEffect(() =>{
    axios.get(SWAPIPeopleurl).then((res) =>{
      console.log(res.data)
      setSWAPIPeople(res.data)
    })},[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {SWAPIPeople && <CharacterBackground>
      {SWAPIPeople.map((el,i) => {
        console.log(el.name)
        return(
          <Character arrCount={SWAPIPeople.length} id={i} key={i} characterObj={el}/>
        )
      })}</CharacterBackground>}
    </div>
  );
}

export default App;
