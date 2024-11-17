    const animalList = document.querySelector('.game-board');
const mystart=document.querySelector('.mystart');
let gameOver=document.querySelector('.game-over');

    let chooseAnswer

    let score =0
    let num=0
    let time=10
    let interval
    let timer=document.querySelector('.timer')
    let p=document.querySelector('.p')
    function start(d){
        if (interval){

            return

        }
        interval = setInterval(function(){
            time--
            if (time>=0) {
                timer.innerHTML = time +' sec'
            }
            if (time===0){
                gameOver.classList.remove('d-none')

            }
        },1000)
    }

function makeAnimals(){
    animalList.innerHTML=''
    animals=animals.sort(()=>Math.random() - 0.5)

    animals.forEach(animal => {
        i = 0
        // Ստեղծում ենք նոր div տարր յուրաքանչյուր կենդանու համար
        let animalDiv = document.createElement('div');
        animalDiv.classList.add('animal-item');
        animalDiv.setAttribute('data-id',animal.id)

        // Պատկերը
        let img = document.createElement('img');
        img.src = 'animal/' + animal.thumbImg;
        img.alt = animal.name;

        // Անունը
        let name = document.createElement('h3');
        name.textContent = animal.name;

        // Ավելացնում ենք պատկերը և անունը div տարրում
        animalDiv.appendChild(img);
        animalDiv.appendChild(name);

        // Ավելացնում ենք կենդանու տարրը ցուցակի մեջ
        animalList.appendChild(animalDiv);
animalDiv.onclick=function () {
   let id=+animalDiv.getAttribute('data-id')

    if(chooseAnswer.id===id){
        scoreupdate()
        randomAnswer()
    }
}
    });

}

    function scoreupdate(value){
        let scoretag=document.querySelector('.score')
        if (value===0){
            score=value
            scoretag.innerHTML=value
        }
  else{
            score+=10
            scoretag.innerHTML=score
            // if (score.innerHTML===40){
            //     gameOver.classList.remove('d-none')
            // }
            let over_score=document.querySelector('.over-score');

            over_score.innerHTML=score;
        }

    }
mystart.onclick=function (){

    scoreupdate(0)
    randomAnswer()
    makeAnimals()
    start()
    time=10
    // clearInterval(interval)



    gameOver.classList.add('d-none');
}
function randomAnswer(){
     chooseAnswer=   animals[Math.floor(Math.random() * animals.length)];
    let currentImage=document.querySelector('.current-img');
    let currentTitle=document.querySelector('.current-title');
    currentImage.src=`./animal/${chooseAnswer.thumbImg}`
    currentTitle.innerHTML=chooseAnswer.name;

}
document.body.onload=function(){
    let loading=document.querySelector('.loading');
    loading.classList.add('d-none');
    // over_score.innerHTML=score;
    //
    // scoreupdate(0)

    start()
    makeAnimals()
    randomAnswer()
//
}
// makeAnimals(animals)