let greetingMessage = "good morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage() {
  greetingMessage = "Something totally different!";
}

changeGreetingMessage();

greetPeople();
