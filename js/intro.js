
let howPlayBtn =document.getElementById('howPlayBtn');
let howPlayDiv=document.getElementById('howPlayDiv');
let backBtn =document.getElementById('backBtn');

howPlayBtn.addEventListener('click',function(){    
    howPlayDiv.style.display='block';
});

backBtn.addEventListener('click',function(){
   howPlayDiv.style.display='none';
    
});