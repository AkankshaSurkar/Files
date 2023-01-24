const posts= [
    {title:'Post One', body: 'This is post one'},   
     {title: 'Post Two', body: 'This is post two'}
];
function getPosts(){
    setTimeout(() => {
        let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        },1000);
    }
    function createPost(post,callback){
        setTimeout(() => {
            posts.push(post);
            callback();
        }, 2000);
    }
    createPost({title:'Post Three', body:'this is post Three'},getPosts);



    //example2
    const post1s= [
        {title:'Post One', body: 'This is post one'},   
         {title: 'Post Two', body: 'This is post two'}
    ];
    function getPosts(){
        setTimeout(() => {
            let output = '';
            post1s.forEach((post, index) => {
                    output += `<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
            },1000);
        }
        function createPost(post,callback){
            setTimeout(() => {
                post1s.push(post);
                callback();
            }, 2000);
        }
        createPost({title:'Post Three', body:'this is post Three'},getPosts);

        function create4thPost(post,callback){
            setTimeout(() => {
                post1s.push({...post, createdAt: new Date().getTime()});
                callback();
            }, 6000);
        }
         
        create4thPost({title:'Post Four', body:'this is post four'},getPosts);
