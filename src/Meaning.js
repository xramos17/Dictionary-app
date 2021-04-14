import React from "react";

export default function Meaning (props){
return (
    <div>
    <h3> {props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index){
        return (
            <div key={index}>
{definition.definition}
<br />
{definition.example}
            </div>
        );
    })}
    <h5>Definition</h5>
    <p> {props.meaning.definitions[0].definition}</p>
    <h5>Example</h5>
    <p> {props.meaning.definitions[0].example}
    </p>
    </div>
);
}
 