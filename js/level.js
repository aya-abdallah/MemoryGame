let cardList=[]; 
let interval =0;
let cardsElement =document.getElementById('card');

class LoadBG_Map{
    constructor(levelNum,character){
        this.levelNum=levelNum;
        this.character=character;
        this.loadMap(levelNum);
        this.loadBG(character);
    }
    
    loadMap(levelNum){
    let mapImage = document.getElementsByClassName('mapImage');
    if(levelNum === 1){
        mapImage[0].src='img/red.png';
    }else if(levelNum === 2){
         mapImage[0].src='img/green.png';
         mapImage[1].src='images/red.png';
    }else if(levelNum === 3){
         mapImage[0].src='img/green.png';
         mapImage[1].src='img/green.png';
         mapImage[2].src='img/red.png';
    }
 }
    loadBG(){
        if(this.character===1){
            document.body.style.backgroundColor='red';
        }else{
            document.body.style.backgroundColor='blue';
        }
        
    }  
    
}



class RandomCards extends LoadBG_Map{
      
    constructor(levelNum , cardLength , character){
        super(levelNum,character);
        this.cardLength=cardLength;
        this.character=character;
         
    }
  
    generateCards(cardLength){
       let randomIndex;
        
        randomIndex=Math.floor(Math.random()*20);
        while(cardList.indexOf(randomIndex) !== -1){
            randomIndex=Math.floor(Math.random()*20);
            }
        cardList.push(randomIndex);
        let urlString = 'url(img/cardImage/' + (randomIndex+1) + '.jpg)';
        cardsElement.style.backgroundImage=urlString;
        console.log(cardList);
    
        if(cardList.length === cardLength)
           clearInterval(interval);
        }
}

//import flag from 'js/start.js';
//console.log(flag);
 function loadlvel1(){
   const r =new RandomCards(1,7,2);
   interval = setInterval(r.generateCards,1000,7);
   r.loadMap();
   r.loadBG();  
}
//if(flag)
   loadlvel1(); 