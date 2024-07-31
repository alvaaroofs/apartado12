import './App.css';
import { Cat } from './components/Cat';
import { useState } from "react";
//En este apartado 12, aprenderemos a crear hooks de forma customizada; esto nos permite crear diferentes componentes fuera del App.js en este caso, 
//como importar useStates desde los componentes a la funcion principal;  (la hook que haremos es useGetCat.js);

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}> {isVisible ? "Hide" : "Show"} </button>
      {isVisible && <Cat></Cat>}
    </div>
  );
}

export default App;


//Error con el useQuery del componente useGetCat.js