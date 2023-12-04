// Quiz
// Button Event Listener
document.getElementById("markquiz-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Ids
  let realesed = document.getElementById("realesed").value.toLowerCase();
  let players = document.getElementById("players").value.toLowerCase();
  let rank = document.getElementById("rank").value.toLowerCase();
  let Oggun = document.getElementById("Oggun").value.toLowerCase();
  // spans
  let checkYear = document.getElementById("Year");
  let checkplayers = document.getElementById("checkplayers");
  let checkrank = document.getElementById("check");
  let checkOggun = document.getElementById("checkgun");
  //Righ Ids
  let number = 0;
  let checkcorrectlayer = 0;
  let checkposition = 0;
  let checkgun = 0;

  if (realesed === "2017") {
    checkYear.innerHTML = "True";
    number = number + 1;
  } else {
    checkYear.innerHTML = "false";
  }
  if (players === "50") {
    checkplayers.innerHTML = "true";
    checkcorrectlayer = checkcorrectlayer + 1;
  } else {
    checkplayers.innerHTML = "false";
  }
  if (rank === "grandmaster") {
    checkrank.innerHTML = "true";
    checkposition = checkposition + 1;
  } else {
    checkrank.innerHTML = "false";
  }
  if (Oggun === "m4a1" || Oggun === "ak47") {
    checkOggun.innerHTML = "true";
    checkgun = checkgun + 1;
  } else {
    checkOggun.innerHTML = "false";
  }
  //output
  let finaloutput = number + checkcorrectlayer + checkposition + checkgun;
  document.getElementById("percentage-out").innerHTML = finaloutput;

  //percentage
  let percentage =
    (number * 100) / 4 +
    (checkcorrectlayer * 100) / 4 +
    (checkposition * 100) / 4 +
    (checkgun * 100) / 4;
  document.getElementById("span-out").innerHTML = percentage;

  // comment
  if (percentage === 0) {
    document.getElementById("appreciate-out").innerHTML =
      "It looks like you missclicked try again";
  } else if (percentage === 25) {
    document.getElementById("appreciate-out").innerHTML = "Keep practising ";
  } else if (percentage === 50) {
    document.getElementById("appreciate-out").innerHTML = "Not bad ";
  } else if (percentage === 75) {
    document.getElementById("appreciate-out").innerHTML =
      "Youre almost there just a bit of push ";
  } else if (percentage === 100) {
    document.getElementById("appreciate-out").innerHTML =
      "Youre Free fire  God  ";
  }
}
