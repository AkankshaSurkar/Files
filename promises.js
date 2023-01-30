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
    function createPost(post){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                posts.push(post);  
                const error = false;
                if(!error){
                    resolve();
                }
                else{
                    reject('Error: Something went wrong');
                }
            },1000);
        });
    }
    function create4Post(post){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                posts.push(post);  
                const error = false;
                if(!error){
                    resolve();
                }
                else{
                    reject('Error: Something went wrong');
                }
            },2000);
        });
    }

   // createPost({title:'Post Three', body:'this is post Three'})
  //  .then(getPosts)
   // .catch(err => console.log(err));

//delete post

    function deletePost(){
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(posts.length >0 ){
                const lastelement = posts.pop()
                resolve(lastelement);
            }
            else{
                reject('Array is empty now');
            }
        },1000);
       });
    }
    
    
    createPost({title:'Post Three', body:'This is post Three'})
    create4Post({title:'Post four', body:'This is post four'})

    .then(()=>{
        getPosts()
        deletePost().then((deletedElement)=>{
            console.log(deletedElement)
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(() =>{ 
                    getPosts();
                    deletePost().then(()=>{
                        getPosts();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('inside catch block',err);
                })
            }).catch((err)=>{})
         }).catch((err)=>{})
      }).catch((err)=>{})
    })
})
    .catch(err=> console.log(err))
    
    