document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getApiData);


function getText(e) {
    fetch('test.txt').then(
        function(response) {
            return response.text();
        }
    ).then(
        function(data) {
            document.querySelector('#output').innerHTML = data;
            console.log(data);
        }
    )

    .catch(
        function(err) {
            console.log(err);
        }
    )
}


function getJson(e) {
    fetch('posts.json').then(
        function(response) {
            return response.text();
        }
    ).then(
        function(data) {

            let dataarr = JSON.parse(data)
            dataarr.forEach( function(obj){
            document.querySelector('#output').innerHTML += `<li> title: ${obj.title} | body: ${obj.body}` ;

            })
            console.log(dataarr);
        }
    )

    .catch(
        function(err) {
            console.log(err);
        }
    )
}

function getApiData(e) {
    fetch('https://api.github.com/users').then(
        function(response) {
            return response.text();
        }
    ).then(
        function(data) {

            let dataarr = JSON.parse(data)
            dataarr.forEach( function(obj){
            document.querySelector('#output').innerHTML += `<li> title: ${obj.login} | body: ${obj.url}` ;

            })
            console.log(dataarr);
        }
    )

    .then (handleErrors)

    .catch(
        function(err) {
            console.log(err);
        }
    )
}

function handleErrors(res) {
    if( !res) {
        throw new Error(res.error);
        return res;
    } 
}