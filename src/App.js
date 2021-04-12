import './App.css';
import DictionarySearch from "./DictionarySearch.js"; 

 export default function App() {
  return (
    <div className="App">
      <div className="container">

      <header className="App-header">
     
      <h1 className="dictionary-header"> Dictionary</h1>
      <h5 className="text-center dictionary-legend ">/What word do you want to look up?/</h5>

     <DictionarySearch />   

      </header>



      <footer className="footer-section m-3">
       Coded by <a href="https://github.com/xramos17" alt="github address of Alex Ramos" className="text-decoration-none"> Alex Ramos</a> 
      </footer>
    </div>
</div>
  );
}


