import logo from './logo.svg';
import './assets/css/App.css';

//IMPORTAR COMPONENTES
import MiComponente from './components/Micomponente.js'

function mostarTexto(){
  var texto = 
  <div>
    <h1>TITULO</h1>
    <h2>texto XD de pana!!</h2>
  </div> 
  return texto;

}

function App() {

  var name = "juan";
  var presentacion = <h1>hola soy {name}</h1>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primera app react!!
        </p>
        {presentacion}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
            Learn React
        </a>

        
      </header>
      <div className='componentes'>
      <MiComponente></MiComponente>
      
      <MiComponente></MiComponente>
      </div>
    </div>
  );
}

export default App;
