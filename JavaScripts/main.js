const getPlayer1 = () => {
    let myRequest = new XMLHttpRequest();
    let player1 = document.getElementById("player1-name").value;
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", `https://teamtreehouse.com/${player1}.json`);
    myRequest.send();
    addEventListener();
  };

let players = [];
const getPlayer2 = (player1) => {
    let player2 = document.getElementById("player2-name").value;
    let secondRequest = new XMLHttpRequest();
    secondRequest.addEventListener("load", afterPlayer1Loads);
    secondRequest.open("GET", `https://teamtreehouse.com/${player2}.json`);
    secondRequest.send();
    function afterPlayer1Loads(player1) {
        const player2Data = JSON.parse(this.responseText);
        players.push(player2Data);
        buildDomString(players);
    }
    addEventListener();
};

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (players) => {

    let domString ='';
    players.forEach((player) => {
    domString += `<div class="col-md-6">`;
    domString += `<img src="${player.gravatar_url}" class="player2-image"><br>`;
    domString += `<span class="score" id="player2-score">${player.points.total}</span>`;
    domString += `</div>`;
});

printToDom(domString, "cageMatch");
cageMatch(players);

};
const addEventListener = () => {
    const war = document.getElementById("startMatch");
    war.addEventListener('click', getPlayer2);
};


const cageMatch = (winnerArray) => {
    const mate1 = winnerArray[0].points.total;
    const mate2 = winnerArray[1].points.total;
        if (mate1 > mate2) {
          WinnerResults(winnerArray[0]);
        } else {
          WinnerResults(winnerArray[1]);
        }
};

const WinnerResults = (winner) => {
  let showWinner = "";
  showWinner += `<h2><u>${winner.name}</u></h2>`;
  for (let i = 0; i < winner.badges.length; i++) {
    showWinner += `<div class="won">
                              <img class="badges" src="${winner.badges[i].icon_url}" width="50px" height="50px">
                          </div>`;

  }
  printToDom(showWinner, 'winner');
}


function executeThisCodeIfXHRFails(){
    console.log("something went wrong");
};

function executeThisCodeAfterFileLoaded (){
    // console.log("executeThisCodeAfterFileLoaded", executeThisCodeAfterFileLoaded);
//     console.log("this", this);
//     console.log("this.responseText", this.responseText);
    const data = JSON.parse(this.responseText);
    players.push(data);
};

getPlayer1();