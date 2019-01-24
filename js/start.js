let start_btn=document.getElementById('start');
let check_char = document.getElementById('msg_radio');
let check_name = document.getElementById('msg_name');
 let storge = window.localStorage;
let flag= 0;

if(start_btn){
    start_btn.addEventListener('click' , function(e){
    e.preventDefault();
    if(!radio()){
        check_char.textContent='you must choose character';
        check_char.style.color='red';
        check_char.style.fontSize='25px';
    }else{
        check_char.textContent='';
    }
    if(!input()){
        check_name.textContent='you must enter your name';
        check_name.style.color='red';
         check_name.style.fontSize='25px';

    } else{
        check_name.textContent='';
    }
    if(radio()&&input()){
      setFlag(1);
      window.location.href='levels.html'; 

    }
});
}

function setFlag(val){
    flag=val;
}


export {flag,setFlag};

 function radio(){
    let radio_btn =document.getElementsByName('radio');
    for(let i=0; i<radio_btn.length ; i++){
        if(radio_btn[i].checked){   
        
            localStorage.setItem('char',radio_btn[i].value);
            localStorage.setItem('charSrc',radio_btn[i].nextElementSibling.getAttribute('src'));
            console.log('src='+radio_btn[i].nextElementSibling.getAttribute('src'));
            return radio_btn[i].value;
        }
    }
    return null;
}
 function input(){
    let name = document.getElementById("name");
    if (name.value === "" || name.length <= 3) {
        return false;
    }
     localStorage.setItem('charName',name.value);
    return true;
}
