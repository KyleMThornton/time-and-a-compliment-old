var complimentsList = [
  "That's a very nice color on you.",
  "You look great today.",
  "You’re a smart cookie.",
  "I bet you make babies smile.",
  "You have impeccable manners.",
  "I like your style.",
  "You have the best laugh.",
  "You are the most perfect you there is.",
  "You’re strong.",
  "Your perspective is refreshing.",
  "You’re an awesome friend.",
  "You light up the room.",
  "You deserve a hug right now.",
  "You should be proud of yourself.",
  "You’re more helpful than you realize.",
  "You have a great sense of humor.",
  "You’ve got all the right moves!",
  "Is that your picture next to “charming” in the dictionary?",
  "Your kindness is a balm to all who encounter it.",
  "You’re all that and a super-size bag of chips.",
  "On a scale from 1 to 10, you’re an 11.",
  "You are brave.",
  "You’re even more beautiful on the inside than you are on the outside.",
  "You have the courage of your convictions.",
  "Aside from food. You’re my favorite.",
  "If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.",
  "You are making a difference.",
  "You’re like sunshine on a rainy day.",
  "You bring out the best in other people."
];

function fetchRandomCompliment() {
  var randomCompliment =
    complimentsList[Math.floor(Math.random() * complimentsList.length)];

  document.getElementById("complimentText").innerHTML = randomCompliment;
}

// https://thinkkindness.org/a-list-of-100-compliments/
