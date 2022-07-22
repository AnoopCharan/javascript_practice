// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {
//     // Create XHR object
//     const xhr = new XMLHttpRequest();

//     // open
//     xhr.open('GET', 'data.txt', true);
//     // console.log(xhr.readyState)

//     xhr.onload = function() {
//         console.log(xhr.readyState);
//         if (this.status === 200) {
//             console.log(this.responseText);
//             document.getElementById('output').innerHTML = `<p> <h5>Data: </h5> ${this.responseText}</p>`;
//         }
//     }

//     // for spinners and progress bars
//     xhr.onprogress = function () {
//         console.log('Ready state: ', xhr.readyState);
        
//     }

//     xhr.onerror = function() {
//         console.log('Request Error: ', )
//     }

//     // xhr.onreadystatechange = function() {
//     //     console.log('Ready State:', xhr.readyState );
//     //     if (this.status ===200 && this.readyState === 4) {
//     //         console.log(this.responseText);
//     //     }
//     // }

//     xhr.send();

// }

document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', async= true);

    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            const output =`
            <ul>
                <li>ID : ${customer.id} </li>
                <li>Name: ${customer.name}</li>
                <li>City: ${customer.city} </li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `

            document.getElementById('customer').innerHTML= output;
        }
    }

    xhr.send();
}

// array
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', async= true);

    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output ='';

            customers.forEach( function(customer, index) {
                output +=`
                <ul>
                    <h5>Customer #: ${index+1} </h5>
                    <li>ID : ${customer.id} </li>
                    <li>Name: ${customer.name}</li>
                    <li>City: ${customer.city} </li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
                `

            })
            

            document.getElementById('customers').innerHTML= output;
        }
    }

    xhr.send();
}