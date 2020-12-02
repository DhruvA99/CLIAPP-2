//assignment-1

//introduction
var readLineSync=require('readline-sync');
const chalk = require('chalk');

var userName=readLineSync.question('Hi! What is your name? ');
console.log('Hello '+userName+". Welcome to the Manchester United quiz! ");
console.log("---------------------------------------")
//question list
var questionList=[{ques:"What is the name of Manchester United's home ground?",ans:"Old Trafford"},{ques:"Who was the manager before Ole Gunnar Solskjaer?",ans:"Jose Mourinho"},{ques:"What is Manchester United's nickname?",ans:"Red Devils"},{ques:"Who is Manchester United's all-time top goalscorer? ",ans:"Wayne Rooney"},{ques:"What nickname did United fans give to Eric Cantona? ",ans:"King Eric"}];

var score=0;
var userList=[{name:"Maneesh Paul",score:2},{name:"Ramachandran Tagore",score:3}];
var highestScore=-1;
var highestScorerName=" ";
var lastQues=false;

//quiz
function quizGame(question,answer){
  var userAns=readLineSync.question(chalk.blue(question)+" ");
  if(userAns.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("You have got the Correct Answer!You get one point"));
  score+=1;
  }
  else{
    console.log(chalk.red("Oops!This is the wrong answer!You dont get any point"));
    
  }
  console.log("your current score is "+score);
  console.log("-------------------------------------")
  if(lastQues===false){
  var checkStatus=readLineSync.question("Do you wish to continue type(y/n)");
  if(checkStatus==="n"){
    lastQues=true;
  }
  }
}

var count=0;
while(count<questionList.length && lastQues===false){
  quizGame(questionList[count].ques,questionList[count].ans);
  
  if(count===questionList.length-1){
    lastQues=true;
  }
  count++;
}
console.log("------------------------")
console.log(chalk.blue('You Final Score ')+chalk.red(score))
userList.push({name:userName,score:score});
userList.forEach(item=>{
  if(item.score>highestScore){
    highestScore=item.score;
    highestScorerName=item.name;
  }
})

console.log(chalk.bold.magenta("The highest Scorer is "+highestScorerName+" with a score of "+highestScore));
console.log("Thankyou for playing !")