let button = document.querySelectorAll(".btn");
let counter = document.querySelector(".counter");

let initial=0;
let count= initial;
let inc= function(e){
  if(e.target.innerHTML== "Decrease"){
     counter.innerHTML= --count;
  }else if(e.target.innerHTML== "Reset"){
     
      counter.innerHTML=initial;
       count=initial;
  }else if(e.target.innerHTML==
    "Increase") {
        counter.innerHTML= ++count;
    } 
       

};
// for (let i=0; i<button.length; i++){   //for loop
//     button[i].addEventListener("click",inc);
// };
button.forEach(function(item){
    item.addEventListener("click",inc);
})



