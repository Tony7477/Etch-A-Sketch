let container=document.querySelector('.container');
let button=document.querySelector('button');
button.addEventListener('click',()=>{
    container.innerHTML="";

let size=prompt("please let me know what type of grid size do you want");
container.style.setProperty('--rows',size);
    for(let i=0;i<parseInt(size)*parseInt(size);i++){

        let block = document.createElement('div');
        block.classList.add('block');
        block.style.cssText ='border: 1px solid black; padding:7px; ';
        container.appendChild(block);
    }
    let blocks=document.querySelectorAll('.block');
console.log(blocks);

blocks.forEach((block)=>{
    block.addEventListener('mouseover',()=>{
    
block.style.cssText ='background:black;border: 1px solid black; padding:7px';

     });

});


});



