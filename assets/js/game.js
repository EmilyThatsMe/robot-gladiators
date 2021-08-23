var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of 'playerAttack' from value of 'enemyHealth' and update value in 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know it worked
   console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

   );

   //check enemy's health
   if (enemyHealth <= 0) {
       window.alert(enemyName + " has died!");
   }
   else {
       window.alert(enemyName + " still has " + enemyHealth + " health left.");
   }

    //Subtract value of 'enemyAttack from value of 'playerHealth' and update 'playerhealth' variable
    playerHealth = playerHealth - enemyAttack;

    //log resulting message to console so we know it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaing."
    );

    // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

};

fight();
