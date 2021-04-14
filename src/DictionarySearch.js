import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import ResultDictionary from "./ResultDictionary.js"


export default function DictionarySearch(){

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);


function handleResponse(response){
console.log(response.data[0]);
setResults(response.data[0]);
}

 function search(event){
    event.preventDefault(); 
    //
    //
     let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
     axios.get(apiUrl).then(handleResponse);

    }

    function handleKeywordChange(event){
    setKeyword(event.target.value);
   
    }

    return( <div>
<div className="dictionary-header">
<h1 className="dictionary-h1"> Dictionary</h1>
      <h4 className=" dictionary-legend">/What word do you want to look up?/</h4>

        <div className="Dictionary-search mb-5">
          <form onSubmit={search}>
              <input type="search" className="input-search mt-4" onChange={handleKeywordChange} />
       </form>
</div>
</div>




<div className="body-dictionary ">
       <ResultDictionary results={results}/>
      </div>  


      </div>
    );
};