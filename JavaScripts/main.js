// const addEventListeners => {
//     get Button
//     button.addEventListeners (e) {
//         get Player1
//         get Player 2
//         genericXHRrequest(player1)
//         genericXHRrequest(player2)
//     }
// }

// const genericXHRrequest(player) => {
//     XHR Stuff
//     request.open("GET", treehouse/player.json)
    //    genericXHRrequest.addeventlistener (load, successFunction);
// }

// function successfunction(playerdata) {
//     const data = JSON.parse(this.responsetext)
//     buildDomString(data)
// }

const buildDomString = (data) => {
    let domString ='';
}

console.log();


const cageMatch = (e) => {
    // get player usernames
    const player1name = document.getElementById("player1-name");
    const player2name = document.getElementById("player2-name");

    // get profile info for each player
    genericHeroRequest(loadFileForSingleHero);

    //get and set profile pics for each player

    //get and set score for each player

    //calculate and display winner

};

const addEventListener = () => {
    const buttons = document.getElementsByClassName("start-match");
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", cageMatch);
    }
};

addEventListener();




function executeThisCodeIfXHRFails(){
    console.log("something went wrong");
};

function executeThisCodeAfterFileLoaded (){
    // console.log("executeThisCodeAfterFileLoaded", executeThisCodeAfterFileLoaded);
//     console.log("this", this);
//     console.log("this.responseText", this.responseText);
    const data = JSON.parse(this.responseText);
//     console.log("data", data);
    // buildDomString(data.superheroes);
};

const getPlayer = (player) => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", `https://teamtreehouse.com/${player}.json`);
    myRequest.send();
    // console.log("myrequest", myRequest);
  };
  