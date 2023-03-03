let container=document.querySelector('.container');
for(let i=0;i<16*16;i++){
    let block = document.createElement('div');
    block.classList.add('block');
    block.style.cssText ='border: 1px solid black; padding:10px; width:10px;';
    container.appendChild(block);
}
let blocks=document.querySelectorAll('.block');

blocks.forEach((block)=>{
    block.addEventListener('mouseover',(e)=>{
    
block.style.cssText ='background:black;border: 1px solid black; padding:10px; width:10px;';

     });

});
container.style.cssText='display:grid;   grid-template-columns: repeat(16,0fr);'

