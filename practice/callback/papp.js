const posts = [
    {title: 'post 1', body: 'This is post one'},
    {title: 'post 2', body: 'this is post two'}
];

function createPost(post) {
    return new Promise( function(resolve, reject) {
        console.log('createPost');
        setTimeout(function() {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }  
        }, 2000);
    });
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

createPost({title:'post 3', body:'this is a post'}).then(getPosts).catch(function(error){console.log(error)})
getPosts();