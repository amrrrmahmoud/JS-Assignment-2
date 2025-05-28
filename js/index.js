var quotes = [
  "Be yourself; everyone else is already taken.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
  "Without music, life would be a mistake.",
  "I am so clever that sometimes I don't understand a single word of what I am saying.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
];

var authors = [
  "Oscar Wilde",
  "Marilyn Monroe",
  "Frank Zappa",
  "Albert Einstein",
  "Marcus Tullius Cicero",
  "Bernard M. Baruch",
  "William W. Purkey",
  "Friedrich Nietzsche",
  "Oscar Wilde",
  "Ralph Waldo Emerson",
];

var randomNumberPast;
function displayQuote() {
  var newRandomNumber = Math.floor(Math.random() * 10);

  while (newRandomNumber == randomNumberPast) {
    var newRandomNumber = Math.floor(Math.random() * 10);
  }
  randomNumberPast = newRandomNumber;

  var quote = quotes[newRandomNumber];
  document.getElementById("quote").innerHTML = `"${quote}"`;
  console.log(quote);
  var author = authors[newRandomNumber];

  document.getElementById("author").innerHTML = `-${author}`;
}
