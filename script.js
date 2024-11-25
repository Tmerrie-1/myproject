var database = [
    {
        username:"Emmanuel",
        password:"123"
    }
]

var newsFeed = [
    {
        username:"Tajudeen razak",
        timeline: "It's about to go down"
    },
    {
        username:"Baba G",
        timeline:"Don't try me oo"
    }
]

var UsernamePrompt = prompt("Enter your username");
var PasswordPrompt = prompt("Enter your password")

function signIn(user,pass){
    if (user === database[0].username && pass === database[0].password){
        alert("Hi Emmanuel, You are welcome back.");
    }else {
        alert("I don't know you from anywhere")
    }
}

signIn(UsernamePrompt, PasswordPrompt);