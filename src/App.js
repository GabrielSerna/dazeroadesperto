import './App.css';
import PrimoComponente from './PrimoComponente'

const anagrafica = [
  {
    firstName: "Gabriel",
    lastName: "Serna",
    country: "Italia",
  },
  {
    firstName: "Tom",
    lastName: "Ford",
    country: "Uk",
  },
  {
    firstName: "Richard",
    lastName: "Red",
    country: "USA",
  }
];

const list = [1, 2, 3, 4, 5];
const newList = list.map( el => <h2>{el}</h2> )

function App() {
  return (
    <div className="App">
      {newList}
      {anagrafica.map((el, idx) => {
        return <PrimoComponente key={idx} {...el}/> 
      })}
      
    </div>
  );
}

export default App;