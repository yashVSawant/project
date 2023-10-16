const posts =[{title:'POST1'},{title:'POST2'}];
let setTime = new Date();
const activiTime =[setTime];
console.log(activiTime);

function printPost(){
   
        posts.forEach((post) => {
            console.log(post.title)
        })
    
}
function printActivityTime(){
    let time = new Date();
    console.log(time.getTime())
}

const updateLastUserActivityTime = new Promise((resolve,reject) =>{
        setTimeout(()=>{
           
            activiTime[0] = new Date();
            resolve();
        },1000)
        
    })

const createPost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const newPost = posts.push({title:'NEWPOST'});
            resolve();
        },1000)
    })

function deletePost() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            resolve();
        },1000)
    })
}


Promise.all([createPost,updateLastUserActivityTime]).then(printPost).then(printActivityTime).then(deletePost).then(printPost);
