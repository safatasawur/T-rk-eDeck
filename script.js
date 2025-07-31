



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
  { word: "bir", meaning: "one", image: "imgs/NUMBERS/1.png" },
  { word: "iki", meaning: "two", image: "imgs/NUMBERS/2.png" },
  { word: "üç", meaning: "three", image: "imgs/NUMBERS/3.png" },
  { word: "dört", meaning: "four", image: "imgs/NUMBERS/4.png" },
  { word: "beş", meaning: "five", image: "imgs/NUMBERS/5.png" },
  { word: "altı", meaning: "six", image: "imgs/NUMBERS/6.png" },
  { word: "yedi", meaning: "seven", image: "imgs/NUMBERS/7.png" },
  { word: "sekiz", meaning: "eight", image: "imgs/NUMBERS/8.png" },
  { word: "dokuz", meaning: "nine", image: "imgs/NUMBERS/9.png" },
  { word: "on", meaning: "ten", image: "imgs/NUMBERS/10.png" },
  { word: "yirmi", meaning: "twenty", image: "imgs/NUMBERS/20.png" },
  { word: "otuz", meaning: "thirty", image: "imgs/NUMBERS/30.png" },
  { word: "kırk", meaning: "forty", image: "imgs/NUMBERS/40.png" },
  { word: "elli", meaning: "fifty", image: "imgs/NUMBERS/50.png" },
  { word: "altmış", meaning: "sixty", image: "imgs/NUMBERS/60.png" },
  { word: "yetmiş", meaning: "seventy", image: "imgs/NUMBERS/70.png" },
  { word: "seksen", meaning: "eighty", image: "imgs/NUMBERS/80.png" },
  { word: "doksan", meaning: "ninety", image: "imgs/NUMBERS/90.png" },
  { word: "yüz", meaning: "one hundred", image: "imgs/NUMBERS/100.png" },
  { word: "bin", meaning: "one thousand", image: "imgs/NUMBERS/1000.png" }
]

};


document.addEventListener("DOMContentLoaded", () => {
  hideAllSections();
  const mainHome = document.getElementById('home-section')
  mainHome.style.display='block'//make home section visble at first
    let currentIndex = 0;
let currentCards = [] // array of current cuards of chose category


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

//previous and next button
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
// actegoried for our flashcards
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
// --------------------library---------------------
const navLibrary = document.getElementById('nav-create'); // Adjust ID to match your HTML
const navFlashCards = document.getElementById('nav-flashcards'); // Adjust ID to match your HTML
navFlashCards.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    document.getElementById('flashcard-section').style.display = 'block';
});
navLibrary.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    document.getElementById('library-section').style.display = 'block';
});
const userLibraries ={}
const namesLibrary = new Set()
const librarySection = document.getElementById('library-section')
const newLibraryForm = document.getElementById('create-library-section')
const createLibrary = document.getElementById('create-library')
const cancelLibrary = document.getElementById('cancel-create-library')
const createNewLibrary = document.getElementById('btn-create-library')
//form displaying for creating new library
createNewLibrary.addEventListener('click',(e)=>{
    
    e.preventDefault()
    newLibraryForm.style.display ='block'
    console.log("clicked create")
})
 cancelLibrary.addEventListener('click',()=>{
    const formInput = document.querySelector('.libraryName-Input')
    formInput.value=""
    newLibraryForm.style.display = "none"
 })

     const libraryListParent= document.querySelector('.library-li')
      createLibrary.addEventListener('click',(e)=>{
      e.preventDefault()
       
      const formInput = document.querySelector('.libraryName-Input')
      const nameOfLibrary= document.querySelector('.libraryName-Input').value
      const li = document.createElement('li')
       li.classList.add('user-Library')
       li.setAttribute("data-name", nameOfLibrary);
            //  console.log(li.classList)
       if (nameOfLibrary.trim() === "") {
         alert("Please enter a library name");
         return;}

        if (namesLibrary.has(nameOfLibrary)){
        
        alert("Library with same name exist") 
            return
        }
        li.textContent = nameOfLibrary;
        namesLibrary.add(nameOfLibrary)
     
    
     libraryListParent.appendChild(li)
     formInput.value=""
     newLibraryForm.style.display = "none"
     userLibraries[nameOfLibrary] ={ 
      flashcards: [],
      vocabList: []}
     console.log(userLibraries);
     
     
    })
    
   
   let selectedLibraryName = null
   const backArrow1 = document.getElementById('back-arrow1')
   const backArrow = document.getElementById('back-arrow')
   const customLibrarySection = document.getElementById('custom-library-section');
   const customLibraryTitle = document.getElementById('custom-library-title')
   const customAddFlashCard = document.getElementById('btn-add-flashcard')
   const addFlashCardForm = document.getElementById('add-flashcard-form')
   const saveFlashCard = document.getElementById('save-flashcard')
    const noContentText = document.getElementById('no-content-msg')
    const customVocab = document.getElementById('vocab-list')
    const vocabHeading = document. getElementById('vocablist-heading')
   
   
    libraryListParent.addEventListener('click', (e) => {
    if (e.target.classList.contains('user-Library')) {
    selectedLibraryName = e.target.getAttribute('data-name');
    document.getElementById('create-library-section').style.display = 'none';

   
    customLibrarySection.style.display = 'block';
    librarySection.style.display ="none"
    customLibraryTitle.textContent = selectedLibraryName
    console.log('you opened the library :',selectedLibraryName);
    renderCustomerFlashCard(selectedLibraryName);
   
  }
});
backArrow.addEventListener('click', (e)=>{
  e.preventDefault()
  
  vocabHeading.style.display="block"
  addFlashCardForm.style.display ='none'
})
backArrow1.addEventListener('click', (e)=>{
  e.preventDefault()
  
  customLibrarySection.style.display='none'
  newLibraryForm.style.display ='none'
  librarySection.style.display= 'block'
})
customAddFlashCard.addEventListener('click',(e)=>{
  e.preventDefault()
    customVocab.style.display ="none"
    vocabHeading.style.display="none"
  addFlashCardForm.style.display ='block'

})
 const formWord = document.getElementById('custom-word')
 const formMeaning = document.getElementById('custom-meaning')
 const formImage= document.getElementById('custom-image')
 
saveFlashCard.addEventListener('click',(e)=>{
  e.preventDefault()
  // vocabHeading.style.display="block"
  if (!selectedLibraryName) {
  alert("Please select a library first!");
  return;
  
}

   const Fword = formWord.value.trim()
   const Fmeaning = formMeaning.value.trim()
   const Fimage = formImage.files[0]
   if (Fword=== "" || Fmeaning=== "" )
    {
      alert("Please enter both word and meaning.");
    return;}
    const cardData ={ word: Fword,meaning:Fmeaning}
    if (Fimage)
    {cardData.imageURL = URL.createObjectURL(Fimage);}
    addFlashCardForm.style.display = "none";
     userLibraries[selectedLibraryName].flashcards.push(cardData)
     console.log("Saved to:", selectedLibraryName, userLibraries[selectedLibraryName].flashcards);

     console.log(userLibraries);
     

     
    renderCustomerFlashCard(selectedLibraryName) 

 
   
    
 formWord.value = "";
  formMeaning.value = "";
  formImage.value = "";
})
function renderCustomerFlashCard(libraryName){
  const flashCardContainer = document.getElementById('custom-flashcards')

      flashCardContainer.innerHTML = "";
      const flashcards = userLibraries[libraryName]?.flashcards || []
       
         flashcards.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('user-flashcard');
    div.innerHTML = `
      <h2>${card.word}</h2>
      <p>${card.meaning}</p>
      ${card.imageURL ? `<img src="${card.imageURL}" alt="Flashcard image">` : ""}
    `;
    flashCardContainer.appendChild(div);
    console.log("Rendering flashcards for:", libraryName, userLibraries[libraryName]);

  });}
 

function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}
})



