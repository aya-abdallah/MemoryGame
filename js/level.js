let cardList=[]; 
let interval;
let timeInterval;
let a = [];

//let eventData = JSON.parse(localStorage.getItem('eventData '));
let eventData = [];

let min;
let sec;
let cardsElement =document.getElementById('card');
let cardsDiv=document.getElementById('showCard');
let container=document.getElementById('pop');
let timer=document.getElementById('timer');
let _char = document.getElementById('char_div');
cardsDiv.style.position= "absolute";

class LoadBG_Map{
    constructor(cardListLength,character){
        this.cardListLength=cardListLength;
        this.character=character;
        this.loadMap();
        this.loadBG();
    }
    
    loadMap(){
    let mapImage = document.getElementsByClassName('mapImage');       
    if(this.cardListLength === 6){
        mapImage[0].src='images/red.png';
        mapImage[1].src='images/gray.png';
        mapImage[2].src='images/gray.png';
        
    }else if(this.cardListLength === 9){
         mapImage[0].src='images/green.png';
         mapImage[1].src='images/red.png';
         mapImage[2].src='images/gray.png';
        
           
        
    }else if(this.cardListLength === 12){
         mapImage[0].src='images/green.png';
         mapImage[1].src='images/green.png';
         mapImage[2].src='images/red.png';
       

    }
    
 }
    loadBG(){
        
        if(this.character==='char1'){
            console.log('hello char1');
            document.body.style.backgroundImage='url(./images/BGchar1.png)';
             _char.style.backgroundImage='url(./images/char3.png)';
            _char.style.width='176px';
          
        }else{
            console.log('hello char2');
            document.body.style.backgroundImage='url(./images/BGchar2.png)';
              _char.style.backgroundImage='url(./images/char5.png)';
            _char.style.width='130px';
         
        }
          _char.style.backgroundSize='cover';
        
                _char.style.height='200px';

         document.body.style.backgroundSize='cover';
         document.body.style.height='100%';
         document.body.style.width='100%';
         document.body.style.backgroundRepeat= "no-repeat";      
    }  
    
}

class RandomCards extends LoadBG_Map{
      
    constructor( cardLength , character){
        super(cardLength,character);
        this.cardLength=cardLength;
        this.character=character;
    }
    generateCards(){
          let randomIndex=0;
         if(cardList.length === this.cardLength){        
            console.log('cardlist length = '+cardList.length);
            showCards(cardList.length);
            clearInterval(interval);
            cardsElement.style.display='none';
            cardsElement.innerHTML='';
            cardsDiv.style.display='block';
            return cardList;
        }
     
        randomIndex=Math.floor(Math.random()*17);
        while(cardList.indexOf(randomIndex) !== -1){
            randomIndex=Math.floor(Math.random()*17);
        }
        cardList.push(randomIndex);
        console.log(randomIndex);
        let urlString = 'url(images/' + randomIndex + '.png)';
        cardsElement.style.backgroundImage=urlString;
        cardsElement.style.backgroundSize='cover';
        return cardList;
        }
}

function loadlvel(level){
     let r =new RandomCards(level,localStorage.getItem('char'));
     clearInterval(interval);
     cardList=[];
     arr=[];
     a=[];
     timer.textContent='';
     cardsElement.style.backgroundImage='';
     cardsElement.style.background='';
     cardsElement.style.display='block';
     container.style.display='none';
     timer.style.display='none';
     let intervalFun = ()=>{
        a = r.generateCards();
     }
     interval = setInterval(intervalFun ,1500);
  // r.loadMap();
   //r.loadBG();
}


 loadlvel(6); 
/*
function load ()
{
 var lev=localStorage.getItem('l')


if (lev == 9 )
{
    loadlvel(9)
}
else if(lev == 12)
{
    loadlvel(12)
}
else 
{
    loadlvel(6);
}
    
}
load();
*/

//////////////////////////////////////////////////////////////


function popUp(done ,level) 
{
    container.style.display='block';
    container.style.backgroundImage='url(bb.jpg)';
    container.style.marginLeft='30%';
    container.style.marginTop='115px';

    var badge=document.getElementById('fail');
    var btnNext=document.getElementById('again');
    var text =document.getElementById('score');
    var chr=document.getElementById('chrac');
    var btnExit = document.getElementById('exite');
   
    console.log(localStorage.getItem('charSrc'));
    chr.src=localStorage.getItem('charSrc');
      if (done ===1 ) //flag done if pass the level
    {
        /*
        if(level === 6 )
        {

            //level =9;

            localStorage.setItem('l',9);
            //var i = localStorage.getItem('n');
            //console.log(i);

        } else if (level === 9)
        {
            //level =12;
            localStorage.setItem('l',12);

        }
        else 
        {
            localStorage.setItem('l',6)
        }
       
*/
        
        //////////////////////////////local storage
        if(level ===6)
        {
             maxScore(localStorage.getItem('charName'),'bronzep.png');
            for (let x = 0; x < localStorage.length; x++){
             console.log(JSON.parse(localStorage.getItem('eventData'))[x]);
            }
           // localStorage.setItem('padge','bronzep.png');
        }
        else if(level ===9 )
        {
            maxScore(localStorage.getItem('charName'),'silverbadge.png.PNG');
            for (let x = 0; x < localStorage.length; x++){
             console.log(JSON.parse(localStorage.getItem('eventData'))[x]);
            }
            //localStorage.setItem('padge','silverbadge.png.PNG');

        }else if(level === 12){
           maxScore(localStorage.getItem('charName'),'goldp.png');
            for (let x = 0; x < localStorage.length; x++){
             console.log(JSON.parse(localStorage.getItem('eventData'))[x]);
            }
        // localStorage.setItem('padge','goldp.png');   
        }
        
        /////////////////////
        
        
        
        
        
        
        

        var audiow = new Audio('winning.mp3');
        audiow.play();
        text.textContent='Sucess';
    
        if (level == 6 )
        {
            badge.src='bronzebadge.png';
        }
        else if (level == 9 )
        {
            badge.src='silverbadge.png.png';
        }
        else
        {
            badge.src='goldp.png';
            btnNext.style.display='none'; 
            btnExit.style.margin='auto';
        }


    btnNext.textContent='Next';
    btnNext.addEventListener('click',function()
    {
        cardsElement.style.display='block';
        container.style.display='none';   
        if(level ===6)
        {
          level=9;
         loadlvel(level);
             //maxScore(localStorage.getItem('charName'),'bronzep.png');
           // console.log(localStorage.getItem('eventData'));
           // localStorage.setItem('padge','bronzep.png');
        }
        else if(level ===9 )
        {
            level=12;
            loadlvel(level);
           // maxScore(localStorage.getItem('charName'),'silverbadge.png.PNG');
            //localStorage.setItem('padge','silverbadge.png.PNG');

        }/*else{
           maxScore(localStorage.getItem('charName'),'goldp.png');
        // localStorage.setItem('padge','goldp.png');   
        }*/
      
    });
  
}
 
else
{
    text.textContent='Fail';
    badge.src='sad.png';
    
     btnNext.textContent='Play Again';
    
    var audiol = new Audio('losing.mp3');
    audiol.play();
    btnNext.addEventListener('click',function()
    {
        //window.location.href='levels.html';
       /* cardList=[];
        arr=[];
        clearInterval(interval);*/
        container.style.display='none';
        cardsDiv.style.display='none';
        cardsElement.style.display='block';
        cardsElement.style.backgroundImage='';
        cardsElement.style.background='';

        audiol.pause();
        loadlvel(level);
        
    });

}

var exite=document.getElementById('exite');
exite.addEventListener('click',function()
{
        cardList=[];
        arr=[];
        clearInterval(interval);
        window.location.href='startPage.html'; 
});

}

/////////////////////////////////////////////////////////////
var arr=[];

var showCards = function (level) {
    let arrayRandom = [];
    cardsDiv.innerHTML='';
    timer.style.display='block';
   
    
   var btn= document.createElement("button");
   var arrayLength =a.length;
    for(let i=0;i<arrayLength;i++){
        let random= Math.floor(Math.random() * arrayLength);
        while(arrayRandom.indexOf(a[random]) !== -1){
            random =Math.floor(Math.random() * arrayLength);
            }        
        arrayRandom.push(a[random]);
    }
console.log('a='+a);    
console.log("array random = " + arrayRandom);
    
    if(level===6){
        cardsDiv.style.left= "20%";
        setTimer(1,30,level);
    }
    else if(level===9){
         cardsDiv.style.left= "7%";
        setTimer(2,30,level);

    }
    else{
         cardsDiv.style.left= "5%";
        setTimer(3,30,level);

    }

    for(let i=0; i<level;i++){
        var divs= document.createElement("div");
        cardsDiv.appendChild(divs);
        divs.className= "divsImage";

        var images= document.createElement("img");
        divs.appendChild(images);
        let url="images/" + arrayRandom[i]+".png"
        console.log('url' + url);
        images.src=url;
        images.className= "divsImage";
        images.id= i;
       
    }


    var result= document.getElementsByClassName("divsImage");
    var divChildren = cardsDiv.getElementsByTagName("div"); 

    for(let i=0; i< level*2 ;i++){
        result[i].style.width= 150 + "px";
        result[i].style.height= 200 + "px";
        result[i].style.cssFloat = "left";
        result[i].style.margin= 2 + "%";
    }   

    // submit button
    var text =document.createTextNode("submit") ;
    var node = btn.appendChild (text);
    cardsDiv.appendChild(btn);

    btn.style.fontFamily=  "'Spirax', cursive";
    btn.style.color="white";
    btn.style.border= "none";
    btn.style.padding=15+ "px" + 30+ "px";
    btn.style.textAlign= "center";
    btn.style.textDecoration= "none";
    btn.style.display= "inline-block";
    btn.style.fontSize= 30 +"px";
    btn.style.borderRadius= 15 +"px";
    btn.style.position="fixed";
    btn.style.right = 2 + "px";
    btn.style.bottom= 2 + "px";
    btn.style.width= 150 + "px";
    btn.style.height= 50 + "px";

    
     if(localStorage.getItem('char')=='char1')
         btn.style.backgroundColor= "rgb(165, 103, 114)";
     else
         btn.style.backgroundColor= "blue";
    
    for(let i=0;i<level;i++){
        clickImage (i);
    }
    console.log("arr= "+arr);
        console.log("a= "+a);

    btn.onclick= function (){
        clearInterval(timeInterval);
        var f;
        for(let i=0;i<level;i++){
            if( arr[i]==a[i]){
                f=1;
            }
            else{
                f=0;
                break;
            }
        }

        if(f===1){
            //alert("success");
            popUp(1 ,level);
        }
        else{
           // alert("failure");
            popUp(0 ,level);
        }
    
    }

} 

function clickImage (idImg){
    var imageId;
    document.getElementById(idImg).onclick=function(){
        let imageSrc = document.getElementById(idImg).getAttribute('src');
    if(imageSrc.length===12){
        imageId= imageSrc.slice(7,8);
    }
    else{
        imageId= imageSrc.slice(7,9);
    }
    arr.push(imageId);
    console.log(arr);
    document.getElementById(idImg).remove();
    }
    
}


function setTimer(min,sec,level){
        timeInterval = setInterval(function(){
        sec=parseInt(sec);
        min=parseInt(min);
        sec--;
        if(sec<0){
            min--;
            sec=59;
        }
        if(sec===0&&min===0){
            clearInterval(timeInterval);
            popUp(0,level);
        }
         min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        timer.textContent = min+':'+sec;
    },1000);
}





 function maxScore(name,padge){
   
      eventData = JSON.parse(localStorage.getItem('eventData'));
       if(eventData ==null){
           eventData=[];
       }
       let details={};
         if(name===localStorage.getItem('charName')){
         details["padge"]=padge;
     }else{
       details["name"]=name;
       details["padge"]=padge;
     }
      
      eventData.push(details);
     console.log('eventdata = ' + eventData);
     
      localStorage.setItem('eventData', JSON.stringify(eventData));
    }


/*favaorite('aya','aaaaa');
favaorite('esraa','bbbbbb');
favaorite('aya','vvvv');*/
//console.log( JSON.parse( localStorage.getItem('eventData')));



