// const flashcards = [
//   {
//     word: "elma",
//     meaning: "apple",
//     image: "imgs/apple.jpeg"
//   },
//   {
//     word: "su",
//     meaning: "water",
//     image: "imgs/water.png"
//   }
// ];
const categories = {
  animals: [
    { word: "kedi", meaning: "cat", image: "imgs/cat.jpeg" },
    { word: "köpek", meaning: "dog", image: "imgs/dog.jpeg" },
    { word: "kuş", meaning: "bird", image: "imgs/bird.jpeg" },
    { word: "balık", meaning: "fish", image: "imgs/fish.jpeg" },
    { word: "at", meaning: "horse", image: "imgs/horse.jpeg" },
    { word: "inek", meaning: "cow", image: "imgs/cow.jpeg" },
    { word: "koyun", meaning: "sheep", image: "imgs/sheep.jpeg" },
    { word: "tavşan", meaning: "rabbit", image: "imgs/rabbit.jpeg" },
    { word: "aslan", meaning: "lion", image: "imgs/lion.jpeg" },
    { word: "kaplumbağa", meaning: "turtle", image: "imgs/turtle.jpeg" }
  ],
  fruits: [
    { word: "elma", meaning: "apple", image: "imgs/apple.jpeg" },
    { word: "muz", meaning: "banana", image: "imgs/banana.jpeg" },
    { word: "çilek", meaning: "strawberry", image: "imgs/strawberry.jpeg" },
    { word: "portakal", meaning: "orange", image: "imgs/orange.jpeg" },
    { word: "kiraz", meaning: "cherry", image: "imgs/cherry.jpeg" },
    { word: "üzüm", meaning: "grape", image: "imgs/grape.jpeg" },
    { word: "karpuz", meaning: "watermelon", image: "imgs/watermelon.jpeg" },
    { word: "şeftali", meaning: "peach", image: "imgs/peach.jpeg" },
    { word: "armut", meaning: "pear", image: "imgs/pear.jpeg" },
    { word: "mandalina", meaning: "tangerine", image: "imgs/tangerine.jpeg" }
  ],
  food: [
    { word: "ekmek", meaning: "bread", image: "imgs/bread.jpeg" },
    { word: "peynir", meaning: "cheese", image: "imgs/cheese.jpeg" },
    { word: "et", meaning: "meat", image: "imgs/meat.jpeg" },
    { word: "pilav", meaning: "rice", image: "imgs/rice.jpeg" },
    { word: "çorba", meaning: "soup", image: "imgs/soup.jpeg" },
    { word: "yumurta", meaning: "egg", image: "imgs/egg.jpeg" },
    { word: "yoğurt", meaning: "yogurt", image: "imgs/yogurt.jpeg" },
    { word: "balık", meaning: "fish", image: "imgs/fish-food.jpeg" },
    { word: "tavuk", meaning: "chicken", image: "imgs/chicken.jpeg" },
    { word: "makarna", meaning: "pasta", image: "imgs/pasta.jpeg" }
  ],
  colors: [
    { word: "mavi", meaning: "blue", image: "imgs/blue.jpeg" },
    { word: "kırmızı", meaning: "red", image: "imgs/red.jpeg" },
    { word: "yeşil", meaning: "green", image: "imgs/green.jpeg" },
    { word: "sarı", meaning: "yellow", image: "imgs/yellow.jpeg" },
    { word: "siyah", meaning: "black", image: "imgs/black.jpeg" },
    { word: "beyaz", meaning: "white", image: "imgs/white.jpeg" },
    { word: "turuncu", meaning: "orange", image: "imgs/orange-color.jpeg" },
    { word: "mor", meaning: "purple", image: "imgs/purple.jpeg" },
    { word: "pembe", meaning: "pink", image: "imgs/pink.jpeg" },
    { word: "gri", meaning: "gray", image: "imgs/gray.jpeg" }
  ],
  nouns: [
    { word: "ev", meaning: "house", image: "imgs/house.jpeg" },
    { word: "masa", meaning: "table", image: "imgs/table.jpeg" },
    { word: "kitap", meaning: "book", image: "imgs/book.jpeg" },
    { word: "araba", meaning: "car", image: "imgs/car.jpeg" },
    { word: "okul", meaning: "school", image: "imgs/school.jpeg" },
    { word: "kapı", meaning: "door", image: "imgs/door.jpeg" },
    { word: "pencere", meaning: "window", image: "imgs/window.jpeg" },
    { word: "kalem", meaning: "pen", image: "imgs/pen.jpeg" },
    { word: "sandalye", meaning: "chair", image: "imgs/chair.jpeg" },
    { word: "telefon", meaning: "phone", image: "imgs/phone.jpeg" }
  ],
  numbers: [
    { word: "bir", meaning: "one", image: "imgs/number1.jpeg" },
    { word: "iki", meaning: "two", image: "imgs/number2.jpeg" },
    { word: "üç", meaning: "three", image: "imgs/number3.jpeg" },
    { word: "dört", meaning: "four", image: "imgs/number4.jpeg" },
    { word: "beş", meaning: "five", image: "imgs/number5.jpeg" },
    { word: "altı", meaning: "six", image: "imgs/number6.jpeg" },
    { word: "yedi", meaning: "seven", image: "imgs/number7.jpeg" },
    { word: "sekiz", meaning: "eight", image: "imgs/number8.jpeg" },
    { word: "dokuz", meaning: "nine", image: "imgs/number9.jpeg" },
    { word: "on", meaning: "ten", image: "imgs/number10.jpeg" }
  ]
};

let currentIndex = 0;
let currentCards = []
// const categoryNouns = document.getElementById('btn-nouns')
// const categoryColors = document.getElementById('btn-colors')
// const categoryNumbers = document.getElementById('btn-numebrs')
// const categoryAnimals = document.getElementById('btn-animals')
// const categoryFruits = document.getElementById('btn-fruits')
// const categoryFood = document.getElementById('btn-food')

const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");
const imgEl = document.getElementById("card-image");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
function loadCategory(categoryName){
    if (!categories[categoryName] || categories[categoryName].length === 0) {
    alert("No flashcards in this category yet!");
    return;
  }
    currentCards=categories[categoryName]
    currentIndex =0
    
    renderCard()
}
function renderCard(){
    const card = currentCards[currentIndex]
    wordEl.textContent = card.word
    meaningEl.textContent= card.meaning
    imgEl.src= card.image
}


nextBtn.addEventListener('click',()=>{
    if (currentCards.length === 0) return 
  if (currentIndex< currentCards.length-1){
    currentIndex++
    renderCard()
  }
})
prevBtn.addEventListener('click',()=>{
  if (currentCards.length === 0) return;
  if (currentIndex> 0){
    currentIndex--
    renderCard()
  }
})
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = ["animals", "fruits", "food", "colors", "numbers", "nouns"];
categoryButtons.forEach(category=>{
    const btn = document.getElementById(`btn-${category}`)
    if (!btn) {
    console.warn(`Button with id btn-${category} not found!`);
    return;}
      
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
     loadCategory(category)
    })
})
})

// categoryAnimals.addEventListener('click',(e)=>{
//      e.preventDefault();
//      loadCategory('animals')
// })
// categoryFruits.addEventListener('click',(e)=>{
//      e.preventDefault();
//      loadCategory('fruits')
// })
// categoryNouns.addEventListener('click',(e)=>{
//      e.preventDefault();
//      loadCategory('nouns')
// })
// categoryColors.addEventListener('click',(e)=>{
//      e.preventDefault();
//      loadCategory('colors')
// })
// categoryNumbers.addEventListener('click',(e)=>{
//      e.preventDefault();
//      loadCategory('numbers')
// })
// categoryFood.addEventListener('click',(e)=>{
//      e.preventDefault();
//      loadCategory('food')
// })