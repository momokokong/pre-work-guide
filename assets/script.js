const topics = ['HTML', 'CSS', 'Git', 'JavaScript', "nono"];
const randonTopic = topics[Math.floor(Math.random() * topics.length)];

console.log("Topics we can start with:");
function listTopics() {
  for (let x = 0; x < topics.length; x ++) {
      console.log(topics[x]);
  }
}


function selectTopics() {
    console.log(randonTopic);
    if (randonTopic === "HTML") {
        console.log("Let's study HTML");
    } else if (randonTopic === "CSS") {
        console.log("Let's study CSS");
    } else if (randonTopic === "Git") {
        console.log("Let's study Git");
    } else if (randonTopic === "JavaScript") {
        console.log("Let's study JaveScript");
    } else {
        console.log("Let's study again?");
    }
}

listTopics();
console.log("\nWhat should we study first?\n");
selectTopics();
