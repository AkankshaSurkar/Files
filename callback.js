

const posts= [
    {title:'Post One', body: 'This is post one', createdAt: new Date().getTime()},   
     {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];
let intervalId=0;
function getPosts(){
    clearInterval(intervalId);
    setInterval(() => {
        let output = '';
        for(let i=0;i<posts.length;i++)
        {
           output += `<li>${posts[i].title} - last updated ${(new Date().getTime() -
            posts[i].createdAt)}</li>`;
        }
            document.body.innerHTML = output;
        },1000);
    }
    
    function createPost(post,callback){
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            callback();
        }, 2000);
    }
    function create4thPost(post,callback){
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            callback();
        }, 6000);
    }
     getPosts()
    createPost({title:'Post Three', body:'this is post three'},getPosts);
    create4thPost({title:'Post Four', body:'this is post four'},getPosts);

var timer;
var count = 0;
function lastEditedInSecondAgo(){
    count=0;
    clearInterval(timer)
    timer = setInterval(() =>{
        count++;
        console.log(count);
    }, 5000);
}
    
