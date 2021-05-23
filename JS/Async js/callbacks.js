const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getLastEditTime(posts, callback) {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}. <p>Last edited at ${new Date()}</p></li>`;
        });
        document.body.innerHTML = output;
        callback();
    }, 2000);
}


// getPosts();

// let createpost = createPost({title: 'Post three', body: 'This is post three'}, getPosts);

// create4thPost({title: 'Post four', body: 'This is post fout'}, createpost);

getLastEditTime(posts, create4thPost);