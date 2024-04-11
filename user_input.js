const readline_sync = require("readline-sync");
// console.log(readline_sync);

let user_name = readline_sync.question(`What is your good name?`);
let user_condition = readline_sync.question(`Hi! ${user_name} How are you?`);
if (
  user_condition == "good" ||
  user_condition == "great" ||
  user_condition == "fine"
) {
  console.log(
    `Its really feel pleasure to see you ${user_condition}, ${user_name}`
  );
} else {
  let user_condition_bad = readline_sync.question(
    `Why you feel ${user_condition}, ${user_name}? Is there any problem?`
  );
  console.log(
    `Don't worry ${user_name}! ${user_condition_bad} will solved certainly`
  );
}
