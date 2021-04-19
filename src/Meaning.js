import React from "react";
import "./Dictionary.css";
import "./Meaning.css"
import Synonyms from "./Synonyms.js"

export default function Meaning (props){
return (
    <div>
       <h5 className="text-uppercase ">Definition</h5>

 <p> {props.meaning.definitions[0].definition}</p>

    <h5 className="text-uppercase "> {props.meaning.partOfSpeech}</h5>

    {props.meaning.definitions.map(function(definition, index){
    return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
    })}  


    </div>



);

}
 