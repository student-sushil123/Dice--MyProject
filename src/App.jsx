import { useState } from "react";
import StartGame from "./componants/StartGame"
import GamePlay from "./componants/GamePlay";


const App = () => {
  const [isGameStarted, setisGameStarted] = useState(true); 

  const toggleGamePlay=()=>{
setIsGameStarted((prev)=>!prev);
  };


return (
    <>
    {isGameStarted ? <GamePlay/>:<StartGame toggle= {toggleGamePlay}/>}
    </>
);
}

export default App
