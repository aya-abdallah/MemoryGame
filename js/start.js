let start_btn=document.getElementById('start');
let check_char = document.getElementById('msg_radio');
let check_name = document.getElementById('msg_name');
let flag=0;


if(start_btn){
    start_btn.addEventListener('click' , function(e){
    e.preventDefault();
    if(!radio()){
        check_char.textContent='you must choose character';
    }else{
        check_char.textContent='';
    }
    if(!input()){
        check_name.textContent='you must enter your name';
    } else{
        check_name.textContent='';
    }
    if(radio()&&input()){
        flag = 1;
        console.log(flag);
        window.location.href='levels.html'; 

    }
});
}

function radio(){
    let radio_btn =document.getElementsByName('radio');
    for(let i=0; i<radio_btn.length ; i++){
        if(radio_btn[i].checked){
            return true;
        }
    }
    return false;
}
function input(){
    let name = document.getElementById("name");
    if (name.value === "" || name.length <= 3) {
        return false;
    }
    return true;
}

