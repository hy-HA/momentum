const quotes = [
    {
        quote: "매일 행복하진 않지만 행복한 일은 매일 있어.",
        author: "곰돌이 푸",
    },
    {
        quote: "사람들로 하여금 무모한 도전을 하게하는 원동력은 동경이다.",
        author: "생텍쥐페리",
    },
    {
        quote: "신이여, 저에게 내가 바꾸지 못하는 일을 받아들이는 차분함과 바꿀 수 있는 일을 바꾸는 용기와 그 차이를 늘 구분하는 지혜를 주소서.",
        author: "라인홀드 니버",
    },
    {
        quote: "남의 말을 따라하려면 교육이 필요하다. 그 말에 도전하려면 두뇌가 필요하다.",
        author: "메리 페티본 풀",
    },
    {
        quote: "진정한 예술은 창조적인 예술가의 견딜 수 없는 충동에 의해 생긴다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "명심하라 판단이 약해질 때는 편견이 강해진다.",
        author: "가느 오하라",
    },
    {
        quote: "우리는 받아서 삶을 꾸려나가고 주면서 인생을 꾸며나간다.",
        author: "윈스턴 처칠",
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라.",
        author: "시루스",
    },
    {
        quote: "세상은 고통으로 가득하지만 한편 그것을 이겨내는 일로도 가득차 있다.",
        author: "헬렌켈러",
    },
    {
        quote: "행복은 습관이다.",
        author: "허버드",
    },
    {
        quote: "처음에는 우리가 습관을 만들지만 그 다음에는 습관이 우리를 만든다.",
        author: "존 드라이든",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;