let userClick = 0;
let comClick = 0;

let cho = document.querySelectorAll(".img");
let msg =  document.querySelector(".msg");

function comSelection(){
    let arrSelection = ['rock', 'paper', 'scissors'];
    let randSel = Math.floor(Math.random() * 3);
    return arrSelection[randSel];
}


    function playGame(user){
    const comSel = comSelection();


    if(user === comSel){
        msg.innerText = "It's Draw!";
    }else{
        const winmap = {
            rock : "scissors",
            paper : "rock",
            scissors : "paper"
        }

        const userwin = winmap[user] === comSel;

        if(userwin){
            userClick++;
          let me = document.querySelector(".me-score");
          me.innerText = userClick;
          msg.innerText = "User is win the game !!";
        }else{
            comClick++;
            let com = document.querySelector(".com-score");
            com.innerText = userClick;
            msg.innerText = "Computer is win the game !!";
        }
    }


}
cho.forEach((sel) =>{
    sel.addEventListener("click", function(){
       let userSel = sel.getAttribute("id");
       playGame(userSel);
    })
})

