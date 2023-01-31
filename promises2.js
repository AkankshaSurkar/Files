//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 =10;
const promise3 = new Promise((resolve, reject)=>
setTimeout(resolve, 2000, 'goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
    res.json()
    );
    Promise.all([promise1, promise2, promise3, promise4])
    .then(values =>
        console.log(values)
        );

const posts= [
    {title:'Post One', body: 'This is post one', createdAt: new Date().getTime()},   
     {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];
function getPosts(){
    setTimeout(() => {
        let output = '';
        for(let i=0;i<posts.length;i++)
        {
           output += `<li>${posts[i].title} - last updated ${(new Date().getTime() -
            posts[i].createdAt)}</li>`;
        }
            document.body.innerHTML = output;
        },1000);
    }
    function createPost(post){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                posts.push({...post, createdAt: new Date().getTime()});  
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
    //lastactivitytime

const user = {
    username: 'Akanksha',
    lastactivitytime: '13th of jan'
}
 function updatelastactivitytime() {
        return new  Promise((resolve, reject) => {
            setTimeout(() => {
                user.lastactivitytime = new Date().getTime();
                resolve(user.lastactivitytime)
            },1000)
        })
    }

function userupdatesapost(){
    Promise.all([createPost({title:'Post Three', body:'This is post Three',createdAt: new Date().getTime()}),updatelastactivitytime()])
 .then(([createPostresolves,updatelastactivitytimeresolves])=>
    {
        console.log(updatelastactivitytimeresolves)
    })
    .catch(err => console.log(err))
}
userupdatesapost();


// delete post
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

createPost({title:'Post Three', body:'This is post Three',createdAt: new Date().getTime()})
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











