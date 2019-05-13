
function run_lucky_sevens(){
  var bet = 0
  bet = document.getElementById("initial_bet").value;
  var money = bet;
  var rolls = 0;
  var max = bet;
  var max_roll = 0;
  var sum = 0
    if (bet <= 0) {
      alert("Bet is too low, please enter a price above 0");
    }
    else {
      while (money > 0) {
        sum = (Math.floor(Math.random() * 6) + 1)+(Math.floor(Math.random() * 6) + 1);
        if (sum == 7){
          money = money + 4;
        }
        else {
          money = money - 1;
        }
        rolls++
        if (money > max){
          max = money
          max_roll = rolls
        }
      }
    }
  document.getElementById("results").style.display = "block";
  document.getElementById("bet").innerText = bet;
  document.getElementById("rolls").innerText = rolls;
  document.getElementById("max").innerText = max;
  document.getElementById("max_roll").innerText = max_roll;
  return false;
  }
