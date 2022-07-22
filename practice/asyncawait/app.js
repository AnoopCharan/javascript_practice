async function myFunc() {
    // return 'Hello';

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('1 second delay'), 1000);
    } );

    const error = false;

    if(!error) {
        const header = 'loading data!';
        const res = await promise; //waits until promise is resolved
        return res;

    } else {
        await Promise.reject(new Error('something went wrong'));
    }


}

console.log('first');

myFunc()

    .then(res => console.log(res))
    // .then(header => console.log(header))
    .catch(err => console.log(err));


async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;
}

getUser()
    .then(users => console.log(users));