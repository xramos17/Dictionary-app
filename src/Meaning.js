import React from "react";

export default function Meaning (props){
return (
    
    <div>
    <h3> {props.meaning.partOfSpeech}</h3>
    {props.meaning.definition.map(function(definition, index){
        return (
            <div key={index}>
{definition.definition}
<br />
{definition.example}
            </div>
        );
    })}
    <p> {props.meaning.definition[0].definition}</p>
    <p> {props.meaning.definition[0].example}
    </p>
    </div>
);
}
 