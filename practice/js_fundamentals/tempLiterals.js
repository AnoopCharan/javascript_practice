const Name="anoop";
const age ="28";
const job = "junior mechanical engineer"
const city ="surrey"

let html;

//  Template literals ES6 update

html = `
<ol>
        <li>Name: ${Name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ol>

`

document.body.innerHTML += html;