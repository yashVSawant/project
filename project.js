const form = document.querySelector("form");
const amount=document.getElementById("amount");
const description =document.getElementById("description");
const category=document.getElementById("category");
const button = document.getElementById("button");
const ul = document.getElementById("ul");


for(let key in localStorage){
    
    if(localStorage.hasOwnProperty(key)){
        let value = localStorage[key];
        let obj = JSON.parse(value);
        

        console.log(value); 
        
        let Avalue = obj['valueAmount'];
        let Dvalue = obj['valueDescription'];
        let Cvalue = obj['valueCategory'];
        
         
        const list=document.createElement('li');
        list.className="list-group-item";
        list.appendChild(document.createTextNode(Avalue));
        list.appendChild(document.createTextNode(" - "));
        list.appendChild(document.createTextNode(Dvalue));
        list.appendChild(document.createTextNode(" - "));
        list.appendChild(document.createTextNode(Cvalue));
        list.appendChild(document.createTextNode("  "));
    
        const del = document.createElement('button');
        const edit = document.createElement('button');
    
        del.className = 'btn btn-danger btn-sm float-right delete';
        edit.className ='edit edit-danger edit-sm float-right edit';
    
        del.appendChild(document.createTextNode('delete'));
        edit.appendChild(document.createTextNode('edit'));
    
        list.appendChild(edit);
        list.append(del);
    
        ul.appendChild(list);
    }
}




ul.addEventListener('click' , e=>{
    if(e.target.classList.contains('delete')){
        
          var li = e.target.parentElement;
          const valueA = li.childNodes[0].textContent;
          ul.removeChild(li);
          localStorage.removeItem(valueA);
          
        
      }
      else if(e.target.classList.contains('edit')){
        
        var li = e.target.parentElement;
        const valueA= li.childNodes[0].textContent;
        const valueD= li.childNodes[2].textContent;
        const valueC= li.childNodes[4].textContent;
       
        ul.removeChild(li);
       localStorage.removeItem(valueA);
        amount.value= valueA;
        description.value= valueD;
        category.value= valueC;
      
    }
})


    
button.addEventListener('click',e=>{
    e.preventDefault();
    const valueAmount = amount.value;
    amount.value="";
    const valueDescription = description.value;
    description.value="";
    const valueCategory =  category.value;
    category.value="";
    let myObject ={
       valueAmount ,
       valueDescription,
       valueCategory
       };
       let myObjSerialize = JSON.stringify(myObject);
       localStorage.setItem(valueAmount,myObjSerialize);

    
    const list=document.createElement('li');
    list.className="list-group-item";
    list.appendChild(document.createTextNode(valueAmount));
    list.appendChild(document.createTextNode(" - "));
    list.appendChild(document.createTextNode(valueDescription));
    list.appendChild(document.createTextNode(" - "));
    list.appendChild(document.createTextNode(valueCategory));
    list.appendChild(document.createTextNode("  "));

    const del = document.createElement('button');
    const edit = document.createElement('button');

    del.className = 'btn btn-danger btn-sm float-right delete';
    edit.className ='edit edit-danger edit-sm float-right edit';

    del.appendChild(document.createTextNode('delete'));
    edit.appendChild(document.createTextNode('edit'));

    list.appendChild(edit);
    list.append(del);

    ul.appendChild(list);
});

