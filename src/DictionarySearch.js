import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import ResultDictionary from "./ResultDictionary.js"

export default function DictionarySearch(){

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState({});


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
        <div className="Dictionary-search text-center">
          <form onSubmit={search}>
              <input type="search" className="input-search m-3" onChange={handleKeywordChange} />
       </form>
</div>
<div className="body-dictionary ">
       <ResultDictionary results={results}/>
      </div>  
      </div>
    );
};