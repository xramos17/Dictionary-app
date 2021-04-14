import React from "react";
import "./Dictionary.css";
import "./Meaning.css"

export default function Meaning (props){
return (
    <div>
       <h5 className="text-uppercase ">Definition</h5>

 <p> {props.meaning.definitions[0].definition}</p>

    <h5 className="text-uppercase "> {props.meaning.partOfSpeech}</h5>

    {props.meaning.definitions.map(function(definition, index){
        return (
<div key={index}>
{definition.example}


<div>


</div>

<br />
</div>
        );
    })}  


    </div>



);

}
 