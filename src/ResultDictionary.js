import React from "react";
import Meaning from "./Meaning.js";
import "./Meaning.css";



export default function ResultDictionary (props){

    if(props.results) { 
        return(
        <div className="results mt-4">
      
            <h1 className="text-capitalize mb-2 word-top">{props.results.word}</h1>

            <div className="d-flex flex-row">
            <h4 className="phonetics p-1">{props.results.phonetics[0].text}</h4>
        {/* audio soon  */}
            </div>
             {props.results.meanings.map(function(meaning, index) {
               return (
               <div key={index}> 
               <Meaning meaning={meaning} />
               
               </div>
               );
            })} 
          
        </div>)

    }else{ 
      return null ; 
    }
   
};