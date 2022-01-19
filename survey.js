const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionArray = [
  `What's your name? Nicknames are also acceptable :)`,
  `What's an activity you like doing?`,
  `What do you listen to while doing that?`
]
// const ansArr = []
// for (let question of questionArray) {
//   rl.question(`${question}`),(answer) => {
// 
//     ansArr.push(answer)
//   
// }
// });

let name = ''
let activity = ''
let music = ''
let meal = ''
let food = ''
let sport = ''
let superpower = ''


rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  

  

  rl.question(`What's an activity you like doing? `, (activity) => {

  
   
    
    rl.question('What do you listen to while doing that? ', (music) => {
      ;

      

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        

        
      
        rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
          

          
        
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            

            
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {

              console.log(`Profile: ${name} loves ${activity} while listening to ${music},
              for ${meal} he adores ${food} to keep him fuled for ${sport} and if he had a
              superpower it would be ${superpower}`);
            
              
              rl.close();
            });
          });
        });
      });
    });

  });

});


