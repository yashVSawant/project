console.log('person1: show ticket');
console.log('person2: show ticket');

const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
   
const getCandy = new Promise((resolve,reject)=>resolve('butter'));

const getCoke = new Promise((resolve,reject)=>resolve('coke'));

const preMovie = async() =>{
   const promisewifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(()=> reject('ticket'),3000);
   })

  

   let ticket;
   try{
        ticket = await promisewifeBringingTicket;
   
   
        let[popcorn,candy,coke]  = await Promise.all([getPopcorn,getCandy,getCoke])
        console.log(`${popcorn} , ${candy} , ${coke}`);
    }catch(error){
         ticket ="sad face";
    }
    return ticket;
}

preMovie().then((m)=> console.log(`person3: show ${m}`));

console.log('person4: show ticket');
console.log('person5: show ticket');