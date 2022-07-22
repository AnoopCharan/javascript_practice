const posts = [
    {title: 'post 1', body: 'This is post one'},
    {title: 'post 2', body: 'this is post two'}
];

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout( function() {
//         let output ='';
//         posts.forEach(function(post) {
//             output += `<li>${post.title} : ${post.body}</li>`
//         });

//         document.body.innerHTML = output;
//     }, 1000 );
// }

// createPost({
//     title:'post 3', body: 'this is post 3'
// });

// getPosts(); 


function createPost(post, callback) {
    console.log('createPost');
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    console.log('getPosts');
    setTimeout( function() {
        let output ='';
        posts.forEach(function(post) {
            output += `<li>${post.title} : ${post.body}</li>`
        });

        document.body.innerHTML = output;
    }, 1000 );
}

createPost({
    title:'post 3', body: 'this is post 3'
}, getPosts);

getPosts(); 