const quotes = [
  {
    quote: "It's not enough that we do our best; sometimes we have to do what's required.",
    author: "Sir Winston Churchill",
  },

  {
    quote: "Desire creates the power.",
    author: "Raymond Holliwell",
  },

  {
    quote: "By nature, men are nearly alike; by practice, they get to be wide apart.",
    author: "Confucius",
  },

  {
    quote: "Youth is a wonderful thing. What a crime to waste it on children.",
    author: "George Bernard Shaw",
  },

  {
    quote: "Living in the moment brings you a sense of reverence for all of life's blessings.",
    author: "Oprah Winfreyl",
  },

  {
    quote: "It's not true that life is one damn thing after another; it is one damn thing over and over.",
    author: "Edna St. Vincent Millay",
  },

  {
    quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
    author: "Albert Einstein",
  },

  {
    quote: "Life's a voyage that's homeward bound.",
    author: "Herman Melville",
  },

  {
    quote: "True life is lived when tiny changes occur.",
    author: "Leo Tolstoy",
  },

  {
    quote: "Keep true to the dreams of thy youth.",
    author: "Friedrich von Schiller",
  }

] //명언, 저자를 가진 quotes 배열

const quote = document.querySelector("#quote span:first-child");  //첫 번째 span요소 가져오기
const author = document.querySelector("#quote span:last-child");  //두 번째 span요소 가져오기

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //랜덤으로 quotes배열중 요소 한개 가져오기

quote.innerText = todaysQuote.quote;  //명언
author.innerText = "-"+ todaysQuote.author+ "-";  // 저자
