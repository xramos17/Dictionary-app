import React, { useState } from "react";
import "./Dictionary.css";

export default function DictionarySearch(){
    let [keyword, setKeyword] = useState("");

 function search(event){
        event.preventDefault(); 
     alert(`Searching "${keyword}" definition`);

    }
    function handleKeywordChange(event){
    setKeyword(event.target.value);
   
    }

    return(
        <div className="Dictionary-search text-center">
          <form onSubmit={search}>
              <input type="search" className="input-search m-3" onChange={handleKeywordChange} />


       </form>
        </div>
    );
};