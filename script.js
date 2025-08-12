
import { auth, db } from './firebase.js';
import { signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,updateProfile } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
  import {collection,addDoc,getDocs,deleteDoc,doc} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// your logic here

const addLibrary = async (userId,libraryName)=>{
  try{
  const libRef= collection(db,'users',userId,"libraries")
  const docRef = await addDoc(libRef,{name:libraryName,createdAt: new Date()})
  console.log('library created :', docRef.id);
  return docRef.id;

}
catch(error){console.log('some error',error)}
  }
const addFlashCards = async (userId,libraryId,flashcard)=>{
  const flashcardRef = collection(db,'users',userId,'libraries',libraryId,'flashcards')
  const docRef = await addDoc(flashcardRef,flashcard)
    console.log(flashcard);
  return docRef.id 

  
}
const addVocablist = async (userId,libraryId,vocab)=>{
  const vocablistRef = collection(db,'users',userId,'libraries',libraryId,'vocabList')
  const docRef = await addDoc(vocablistRef,vocab)
  return docRef.id 
}
async function deleteFromFirestore(userId, libId, collectionName, docId) {
  try {
    const docRef = doc(db, 'users', userId, 'libraries', libId, collectionName, docId);
    await deleteDoc(docRef);
    console.log(`Deleted ${collectionName} item with ID: ${docId}`);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}

async function deleteLibraryWithContents(userId, libId) {
  try {
    const libRef = doc(db, 'users', userId, 'libraries', libId);

    // 1. Delete all flashcards
    const flashcardsColRef = collection(libRef, 'flashcards');
    const flashcardsSnapshot = await getDocs(flashcardsColRef);
    for (const docSnap of flashcardsSnapshot.docs) {
      await deleteDoc(docSnap.ref);
    }

    // 2. Delete all vocab
    const vocabColRef = collection(libRef, 'vocabList');
    const vocabSnapshot = await getDocs(vocabColRef);
    for (const docSnap of vocabSnapshot.docs) {
      await deleteDoc(docSnap.ref);
    }

    // 3. Delete the library document
    await deleteDoc(libRef);

    console.log(`✅ Deleted library ${libId} and all its contents`);
  } catch (error) {
    console.error('❌ Error deleting library with contents:', error);
  }
}
// -------------------------------flashcards------------------------------------
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
    { word: "ev", meaning: "house", image: "imgs/noun/ev.png" },
    { word: "masa", meaning: "table", image: "imgs/noun/table.png" },
    { word: "kitap", meaning: "book", image: "imgs/noun/book.png" },
    { word: "araba", meaning: "car", image: "imgs/noun/car.png" },
    { word: "okul", meaning: "school", image: "imgs/noun/school.png" },
    { word: "kapı", meaning: "door", image: "imgs/noun/door.png" },
    { word: "pencere", meaning: "window", image: "imgs/noun/window.png" },
    { word: "kalem", meaning: "pen", image: "imgs/noun/pen.png" },
    { word: "sandalye", meaning: "chair", image: "imgs/noun/chair.png" },
    { word: "telefon", meaning: "phone", image: "imgs/noun/phone.png" }
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
// ----------------------------quiz-------------------------------------
const quizSection = document.getElementById('quiz-section')
function shuffle(array ){
  console.log('entered shufle function');
  
  const shuffled = [...array];
   for (let i= array.length -1; i>0;i--){
     const j = Math.floor(Math.random()* (i+1))
     const temp = shuffled[i]
     shuffled[i]=shuffled[j]
     shuffled[j]=temp
  }
  return shuffled
}


// -----------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  hideAllSections();
  const mainHome = document.getElementById('home-section')

    // //make home section visble at first
    let currentIndex = 0;
let currentCards = [] // array of current cuards of chose category
// --------------------slider
const sliderSection = document.getElementById('slider-section')
const learningSection = document.getElementById('learning-tools')


// ----------------------login.signup part----------------------------

const navBar = document.getElementById('nav-library')
navBar.style.display='none'
const footer = document.getElementById('theFooter')
footer.style.display='none'

const login  = document.getElementById('login-section')
login.style.display=' block'

const register  = document.getElementById('register-section')
const showRegister = document.getElementById('show-register')
const showLogin = document.getElementById('show-login')
const loginBtn = document.getElementById('login-btn')
const registerBtn = document.getElementById('register-btn')
const loginEInput = document.getElementById('login-email')
const loginPInput = document.getElementById('login-password')
const regEInput = document.getElementById('register-email')
const regPInput = document.getElementById('register-password')
const regNInput = document.getElementById('register-name')
const logoutBtn = document.getElementById('logout-btn')
const nameOfUser = document.getElementById('profile-name')
const emailOfUser = document.getElementById('profile-email')
loginBtn.addEventListener('click', (e)=>{
  e.preventDefault()
    const lEmail = loginEInput.value.trim()
    const lPassword = loginPInput.value.trim()
     
     signInWithEmailAndPassword(auth, lEmail, lPassword)
       .then((userCredential) => {
         const user = userCredential.user;
         console.log("Logged in as:", user.email);
           mainHome.style.display='block'
           navBar.style.display ='block'
           login.style.display = 'none';
            sliderSection.style.display ='block'
              learningSection.style.display ='block'
              footer.style.display = 'block'

          
    })
    .catch((error) => {
      // ❌ Handle errors
      console.error("Login error:", error.code, error.message);
      alert("Login failed: " + error.message);
    });





    loginEInput.value =""
    loginPInput.value= ""
})

showRegister.addEventListener('click',(e)=>{
 e.preventDefault()
//  register.style.display ='block'
showSection(register)
 login.style.display='none'
})

registerBtn.addEventListener('click', async (e)=>{
  e.preventDefault()
    console.log("Register button clicked"); // ✅ Test line

    const rEmail = regEInput.value.trim()
    const rPassword = regPInput.value.trim()
    const rName = regNInput.value.trim()

   try{
    const userCredential = await createUserWithEmailAndPassword(auth, rEmail, rPassword)
    const user = userCredential.user
    console.log("user created :" ,user);
    await updateProfile(user, {
      displayName : rName
          })
    alert("Registered successfully!");
    console.log("User info:", user);
     mainHome.style.display ='block'
    navBar.style.display ='block'
    login.style.display = 'none';
    register.style.display = 'none';
    sliderSection.style.display ='block'
    learningSection.style.display ='block'
    footer.style.display ='block'
    
   }
     catch(error) {
  console.error("Registration error:", error.code, error.message);
  alert("Registration failed: " + error.message);
       };

 regEInput.value =""
    regPInput.value= ""
})
 
showLogin.addEventListener('click',(e)=>{
 e.preventDefault()
 register.style.display ='none'
//  login.style.display='block'
showSection(login)
})




logoutBtn.addEventListener('click',(e)=>{
  signOut(auth).then (()=>{
    console.log("user logged out ");
    location.reload()
    
  })
})
// -------------------profileeee-------------------------
const navProfile = document.getElementById('nav-profile')
const profileSection = document.getElementById('profile-section')
navProfile.addEventListener('click', (e)=>{
  e.preventDefault()
  showSection(profileSection)
})


// --------------------------------------------------------------------
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
    // FlashCardSection.style.display ='block'
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
//--------------------SLIDER----------------
// --------------------library---------------------
const navHome = document.getElementById('nav-home')
const navLibrary = document.getElementById('nav-create'); // Adjust ID to match your HTML
const navFlashCards = document.getElementById('nav-flashcards');
const quizTool= document.querySelector('.quiz')
const flashcardTool = document.querySelector('.flashcards')
const LibraryTool = document.querySelector('.library')
const FlashCardSection = document.getElementById('flashcard-section')
LibraryTool.addEventListener('click',(e)=>{
  e.preventDefault()
  hideAllSections()
  librarySection.style.display= 'block'
      librarySection.scrollIntoView({ behavior: 'smooth' });

})
flashcardTool.addEventListener('click',(e)=>{
  e.preventDefault()
  hideAllSections()
      FlashCardSection.style.display ='block'
      FlashCardSection.scrollIntoView({ behavior: 'smooth' });

})
quizTool.addEventListener('click',(e)=>{
  e.preventDefault()
  hideAllSections()
  librarySection.style.display= 'block'
      librarySection.scrollIntoView({ behavior: 'smooth' });

})
 navHome.addEventListener('click', (e) => {
    e.preventDefault();
    
    mainHome.style.display = 'block'
    sliderSection.style.display = 'block'
        learningSection.style.display ='block'
        profileSection.style.display='none'
        librarySection.style.display = 'none'
        quizSection.style.display = 'none'
});
navFlashCards.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    FlashCardSection.style.display = 'block';
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
const libraryNameInput = document.querySelector('.libraryName-Input')


//form displaying for creating new library
createNewLibrary.addEventListener('click',(e)=>{
    
    e.preventDefault()
    newLibraryForm.style.display ='block'
    
    console.log("clicked ")

    
    
})
 cancelLibrary.addEventListener('click',()=>{
    const formInput = document.querySelector('.libraryName-Input')
    formInput.value=""
    newLibraryForm.style.display = "none"
 })
 async function createALibrary(nameOfLibrary) {
  if (namesLibrary.has(nameOfLibrary)) return;
  if (nameOfLibrary.trim() === "") return;

  const user = auth.currentUser;
  const libId = await addLibrary(user.uid, nameOfLibrary);
  if (!libId) return;

  renderTheLibrary(nameOfLibrary, libId);
}

 async function renderTheLibrary(nameOfLibrary,libId){
   if (namesLibrary.has(nameOfLibrary)) return 
     if (nameOfLibrary.trim() === "") return;

   
        const li = document.createElement('li')
        li.classList.add('user-Library')
        li.setAttribute("data-name", nameOfLibrary);
        li.innerHTML=`<div class='eachlib-li'> <span class = 'theLibName'>${nameOfLibrary}</span> <i class = "delete-library fa-solid fa-trash-can" data-id="${libId}"
        data-name="${nameOfLibrary}"></i> </div>`
        // const nameLib = document.querySelector('.theLibName')
        // nameLib.textContent = nameOfLibrary;
        namesLibrary.add(nameOfLibrary)
        
        libraryListParent.appendChild(li)
        
     libraryNameInput.value=""
     newLibraryForm.style.display = "none"
    
   
       if (!userLibraries[nameOfLibrary]){
     userLibraries[nameOfLibrary] ={ 
       id: libId,
      flashcards: [],
      vocabList: []}}
      console.log(userLibraries[nameOfLibrary].id);
      
 }
 const loadLibrary = async (userId)=>{
  const libRef = collection(db,'users',userId,'libraries')
  const snapshot = await getDocs(libRef)
  snapshot.forEach((doc)=>{
    const data = doc.data()
    const name = data.name
    const id = doc.id; 

 renderTheLibrary(name, id);  })
 }

     const libraryListParent= document.querySelector('.library-li')
      createLibrary.addEventListener('click',async(e)=>{
      e.preventDefault()
      const nameOfLibrary= libraryNameInput.value
      if (nameOfLibrary.trim() === "") {
         alert("Please enter a library name");
         return;}
   
      const user = auth.currentUser
  const libId = await addLibrary(user.uid, nameOfLibrary); // ✅ get ID

    //  await addLibrary(user.uid, nameOfLibrary)
      await    renderTheLibrary(nameOfLibrary,libId)

   
    // console.log(quizarray);
      console.log("Clicked createLibrary");
     console.log("Library name:", nameOfLibrary);
     console.log("Current user:", user?.uid);
     
    })
  
   //////////////////Library related/////////////////
   let selectedLibraryName = null
   const backArrow1 = document.getElementById('back-arrow1')
   const backArrow = document.getElementById('back-arrow')
   const customLibrarySection = document.getElementById('custom-library-section');
   const customLibraryTitle = document.getElementById('custom-library-title')
   const OpenFlashCardSection = document.getElementById('btn-add-flashcard')
   const addFlashCardForm = document.getElementById('add-flashcard-form')
   const saveFlashCard = document.getElementById('save-flashcard')
  const noContentText = document.getElementById('no-content-msg')
    
  const addFlashCard = document.getElementById('add-flashcard-btn')
  const flashCardSection=document.getElementById('custom-flashcard-section')
  const formWord = document.getElementById('custom-word')
 const formMeaning = document.getElementById('custom-meaning')
 const formImage= document.getElementById('custom-image')
 const loadedLibraries = new Set();

//  ----------------------------QUIZ RELATED VARIABLE--------------
 let quizarray = []
 let currentQuizIndex = null;
   let correctAnswer = null
const yourScore = document.getElementById('your-score')
const totalScore = document.getElementById('total-score')
const quizWord = document.getElementById('quiz-word')
const optionButtons = document.querySelectorAll('.quiz-option');
const nextQuesBtn = document.getElementById('next-question-btn');
const feedback = document.getElementById('quiz-feedback');
    let replica = []
let usedIndices = new Set()
const questionNo = document.getElementById('quiz-current')
let quesNum = 1
const quizTotalQues = document.getElementById('quiz-total')
const quizBtn = document.getElementById("takeQuiz-btn")
const quizfinalscore = document.querySelector('.quiz-score-end')
 const quizyourfinal = document.getElementById('your-Score')
 const quiztotalfinal = document.getElementById('total-Score')

// const quizProgress = document.getElementById('ques')
// ---------------------------------------------------------------------------------------------------------------------
 
   

quizBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  hideAllSections()
    quizSection.style.display = 'block'
  // Hide other sections if needed

  // Reset quiz state and start fresh
  resetAndStartQuiz();
  
})

async function resetAndStartQuiz() {
  const presentFlashcard = userLibraries[selectedLibraryName]?.flashcards || [];
  const presentVocablist = userLibraries[selectedLibraryName]?.vocabList || [];

  quizarray = [...presentFlashcard, ...presentVocablist];

  usedIndices = new Set();
  score = 0;
  quesNum = 1;
  yourScore.innerText = score;
  questionNo.innerText = quesNum;
  feedback.style.display = 'none';
  nextQuesBtn.style.display = 'none';
  document.querySelector('.quiz-options').style.display = 'block';
  quizfinalscore.style.display= 'none'

  quizTotalQues.innerText = quizarray.length;
  totalScore.innerText = quizarray.length;

  const shuffledQuizArray = shuffle(quizarray);
    console.log(shuffledQuizArray);
   await showQuestion(shuffledQuizArray)
  //  await showQuestion(quizarray)
            yourScore.innerText = score
}
   async function showQuestion(array){
    let falseOP =[]
        const length = array.length

    // if (array.length<2){console.log('need more than');
    // }
  // if (!array || array.length < 4 ) 
  // console.error('Need at least 4 items to generate a quiz')
  if (!array || length<3) 
    {
    console.error('array not found or need more tahn two items');
      return;
  }

    console.log('org array',array);
    
     replica = [...array]
    console.log('mian replica',replica);
    
    do {
  currentQuizIndex = Math.floor(Math.random() * replica.length);
} while (usedIndices.has(currentQuizIndex));

usedIndices.add(currentQuizIndex);
    
    
    const currentItem = replica[currentQuizIndex]
    console.log('curerent item',currentQuizIndex);
    
  
    if (!currentItem) { 
      console.log('cuurent item undefined');
      return;}
    
    const theWord = currentItem.word || '(missing word)';
    const theMeaning = currentItem.meaning || '(missing meaning)';

    console.log('Word:', theWord);
    console.log('Meaning:', theMeaning);
    
    console.log('new replica',replica);
    
    const questionType = Math.random() < 0.5 ? 'word-to-meaning' : 'meaning-to-word'
     if ( questionType==='word-to-meaning'){
         quizWord.textContent = `What is the meaning of ${theWord}`
         correctAnswer = theMeaning
         
               falseOP = replica.map(obj=> obj.meaning)


     }
     else{
       quizWord.textContent =  `What is the meaning of ${theMeaning}`
       correctAnswer = theWord
              falseOP = replica.map(obj=> obj.word)

     }
     console.log(falseOP);
          let copyFalse =  [...falseOP]
         const indexOfCorrect = copyFalse.indexOf(correctAnswer);
if (indexOfCorrect !== -1) {
    copyFalse.splice(indexOfCorrect, 1); // Remove it
}
       const optionCount = Math.min(length, 4);
         const options = shuffle([correctAnswer, ...shuffle(copyFalse).slice(0, optionCount - 1)]);
      //  const options =  [...shuffle(falseOP).slice(0, 3)];
      console.log('options',options);
      
     
      optionButtons.forEach((btn, index) => {
  if (index < optionCount) {
    btn.style.display = 'block';
    btn.textContent = options[index];
    btn.value = options[index];
    btn.disabled = false;
  } else {
    btn.style.display = 'none'; // Hide extra buttons
  }
    // store value for checking later
  });
      
       console.log(replica);
       console.log(usedIndices);
       console.log(falseOP);
  }
     let score = 0
     optionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const userAnswer = btn.value;
    if (userAnswer === correctAnswer) {
      feedback.textContent = '✅ Correct!';
      feedback.style.color = 'green';
      score++
      yourScore.innerText = score
    } else {
      feedback.textContent = `❌ Wrong! Correct: ${correctAnswer}`;
      feedback.style.color = 'red';
    }
    feedback.style.display = 'block';
    nextQuesBtn.style.display='block'
    // optionButtons.forEach(b => b.disabled = true);
  });
});

 console.log(replica);
 
nextQuesBtn.addEventListener('click', () => {
const length= quizarray.length
if(quesNum<length){
       quesNum++

    }
  questionNo.innerText = quesNum

  feedback.style.display='none'
  if ( usedIndices.size<quizarray.length) {
    showQuestion(replica);
  } else {
    endQuiz(); // Define your own function for this
  }
});
function endQuiz() {
  quizWord.textContent = '🎉 Quiz Completed!';
  document.querySelector('.quiz-options').style.display = 'none';
  document.getElementById('next-question-btn').style.display = 'none';
   quizfinalscore.style.display = 'block'
   quizyourfinal.innerText = score
   quiztotalfinal.innerText=quizarray.length
  feedback.style.display = 'none'
}
// takeQuizBtn.addEventListener('click',(e)=>{
//   e.preventDefault()
//   if (quizarray<2){}
//   else if (){}
// })

addFlashCard.addEventListener('click',(e)=>{
  e.preventDefault();
  addFlashCardForm.style.display = 'block'

})
backArrow.addEventListener('click', (e)=>{
  e.preventDefault()
  
  vocabHeading.style.display="block"
  addFlashCardForm.style.display ='none'
  flashCardSection.style.display='none'
  customLibrarySection.style.display ='block'
})
backArrow1.addEventListener('click', (e)=>{
  e.preventDefault()
  
  customLibrarySection.style.display='none'
  newLibraryForm.style.display ='none'
  librarySection.style.display= 'block'
})
OpenFlashCardSection.addEventListener('click',(e)=>{
  e.preventDefault()
    
    // vocabHeading.style.display="none"
  addFlashCardForm.style.display ='none'
  flashCardSection.style.display = 'block'
  customLibrarySection.style.display ='none'
  addFlashCard.style.display='block'


})


saveFlashCard.addEventListener('click',async (e)=>{
  e.preventDefault()
  

      const user = auth.currentUser
      const libraryId = userLibraries[selectedLibraryName].id
     const newCard = renderFlashcard(selectedLibraryName); // ✅ get the latest card

  if (!newCard) return; // something went wrong

  await addFlashCards(user.uid, libraryId, newCard); // ✅ only save this one
      //  await loadFlashCard (user.uid,libraryId)
  
    
      renderCustomerFlashCard(selectedLibraryName) 

 
   

//  formWord.value = "";
//   formMeaning.value = "";
//   formImage.value = "";
})
 const loadFlashCard = async (userId,libId)=>{
  const flashRef = collection(db,'users',userId,'libraries',libId,'flashcards')
  const snapshot = await getDocs(flashRef)
  const libname = Object.keys(userLibraries).find(name=>userLibraries[name].id === libId)
  if (!libname) return
  userLibraries[libname].flashcards = [];
  snapshot.forEach((doc)=>{
    const data = doc.data()
    // userLibraries[libname].flashcards.push(data)
     if (data.word && data.meaning) {
            data.id = doc.id; // ✅ Attach the document ID here!

    userLibraries[libname].flashcards.push(data);
  } else {
    console.warn("Invalid flashcard skipped:", data);
  }
   
    
  })
  console.log('quiz array flashcard updtaed',quizarray);
  
      renderCustomerFlashCard(libname)
console.log(`Loaded flashcards for ${libname}:`, userLibraries[libname].flashcards);

 }
  function renderFlashcard(selectedLibrary){
    addFlashCardForm.style.display = 'none'
    if (!selectedLibrary) return;
     const Fword = formWord.value.trim()
   const Fmeaning = formMeaning.value.trim()
   const Fimage = formImage.files[0]
   if (Fword=== "" || Fmeaning=== "" )
    {
      alert("Please enter both word and meaning.");
    return;}
   
         const cardData ={
          word : Fword,
          meaning : Fmeaning
         }

    // cardData['word'] = Fword
    // cardData['meaning'] = Fmeaning
    console.log(cardData);
    
    if (Fimage)
    {cardData.imageURL = URL.createObjectURL(Fimage);}
    addFlashCardForm.style.display = "none";
     userLibraries[selectedLibrary].flashcards.push(cardData)
      quizarray.push(cardData)
                 console.log('updated quizarrayw ith flascrad ', quizarray);

     console.log(userLibraries);
    formWord.value = "";
  formMeaning.value = "";
  formImage.value = "";
  return cardData
  }

function renderCustomerFlashCard(libraryName){
  const flashCardContainer = document.getElementById('custom-flashcards')

      flashCardContainer.innerHTML = "";
      const flashcards = userLibraries[libraryName]?.flashcards || []
       
         flashcards.forEach((card,index)=> {
    const div = document.createElement('div');
    div.classList.add('user-flashcard');
    div.innerHTML = `
      <h2>${card.word}</h2>
      <p>${card.meaning}</p>
      ${card.imageURL ? `<img src="${card.imageURL}" alt="Flashcard image">` : ""}
      <!-- <button class="delete-flashcard" data-id="${card.id}" data-index="${index}">Delete</button>-->
      <i class="delete-flashcard  fa-solid fa-trash-can" data-id="${card.id}" data-index="${index}"></i>
      
    
    `;
    flashCardContainer.appendChild(div);
    console.log("Rendering flashcards for:", libraryName, userLibraries[libraryName]);

  });}
  // -----------------------vocab--------------------
  
  const vocabHeading = document. getElementById('Vocablist-heading')
  const vocabSection =document.getElementById('vocab-section')
  const vocabForm =document.getElementById('vocab-form')
  const saveVocabBtn = document.getElementById('save-vocab-button')
  const addVocabBtn =document.getElementById('add-vocab-word')
  const backArrow2 = document.getElementById('back-arrow2')
  const vocabWord = document.getElementById('vocab-word')
  const vocabMeaning = document.getElementById('vocab-meaning')
  const vocabBody = document.getElementById('vocab-body')
  // const vocab = {}
  
  vocabHeading.addEventListener('click',(e)=>{
    customLibrarySection.style.display ='none'
  })
  backArrow2.addEventListener('click',(e)=>{
    // librarySection.style.display='block'
    vocabSection.style.display='none'
     customLibrarySection.style.display ='block'
  })
  vocabHeading.addEventListener('click',(e)=>{
        vocabSection.style.display = 'block'
        addFlashCard.style.display='none'

  })
  addVocabBtn.addEventListener('click',(e)=>{
    vocabForm.style.display ='block'
  })
   saveVocabBtn.addEventListener('click',(e)=>{
      vocabForm.style.display ='none'
   })
vocabForm.addEventListener('submit', async  (e)=>{
  e.preventDefault(); // prevent form reload
  const Vword = vocabWord.value.trim();
  const Vmeaning = vocabMeaning.value.trim();
  if (Vword === '' || Vmeaning === '') return;

  const vocab = {
    word: Vword,
    meaning: Vmeaning
  };
      
      const user = auth.currentUser
      const libraryId = userLibraries[selectedLibraryName].id
      const docId = await addVocablist(user.uid, libraryId, vocab);
  vocab.id = docId;
      // await addVocablist(user.uid,libraryId,vocab)
            console.log('selected libraray name insider voacb ofrm ',selectedLibraryName);
console.log('Resolved library:', userLibraries[selectedLibraryName]);

        userLibraries[selectedLibraryName].vocabList.push(vocab)
                 quizarray.push(vocab)
             renderVocab(selectedLibraryName)
                //  userLibraries[selectedLibraryName].vocabList.push(vocab)
                //  quizarray.push(vocab)
                 console.log('updated quizarrayw ith voacb ', quizarray);
                 
console.log('voacba list after reloading : ',userLibraries[selectedLibraryName].vocabList);


 
});
console.log('selected libraray name(before rendervocab) ',selectedLibraryName);

const  renderVocab = async (selectedLibraryName)=>{
  console.log('Resolved library:', userLibraries[selectedLibraryName]);

      if (!selectedLibraryName) return;
      console.log('selected libraray not found ( render vocab)');
      

  
    // userLibraries[selectedLibraryName].vocabList.push(vocab)
 vocabBody.innerHTML = '';  // Clear previous vocab items
 const vocabs = userLibraries[selectedLibraryName]?.vocabList|| []
       
         vocabs.forEach((vocab,index) => {
    const row = document.createElement('tr');
    // div.classList.add('user-flashcard');
    row.innerHTML = `
    <td>${vocab.word}</td>
    <td>${vocab.meaning}</td>
     <td><i class="delete-vocab delete-btn fa-regular fa-trash-can" data-id="${vocab.id}" data-index="${index}"></i></td>


    
  `;

  vocabBody.appendChild(row);})
    // flashCardContainer.appendChild(div);
    
  // const row = document.createElement('tr');

  // Create columns
  // row.innerHTML = `
  //   <td>${vocab.word}</td>
  //   <td>${vocab.meaning}</td>
  //   <td>
  //     <button class="delete-btn">Delete</button>
  //   </td>
  // `;

  // vocabBody.appendChild(row);

  vocabWord.value = '';
  vocabMeaning.value = '';
  vocabForm.style.display = 'none';
}
const  loadVocab = async (userId,libId)=>{
  const vocabRef = collection(db,"users",userId,"libraries",libId,"vocabList")
  const snapshot = await getDocs(vocabRef)
  const libname = Object.keys(userLibraries).find(name=>userLibraries[name].id === libId)
  console.log('load voacb lib name',libname);
  
  if (!libname) return
  userLibraries[libname].vocabList = [];
  snapshot.forEach((doc)=>{
    const data = doc.data()
          data.id = doc.id; // ✅ Attach the document ID here!

    userLibraries[libname].vocabList.push(data)
    // quizarray.push(data)
        

  })
      renderVocab(libname)

    console.log('quiz array vocab updtaed',quizarray);

console.log(`Loaded Vocab List  for ${libname}:`, userLibraries[libname].vocabList);

 


}
document.addEventListener('click', async (e) => {
  const user = auth.currentUser;
  if (!user) return;
   if (e.target.classList.contains('delete-library')) {
      // const libId = e.target.dataset.id;
      const docId = e.target.getAttribute('data-id')
      const libName = e.target.getAttribute('data-name')
    // const libName = e.target.dataset.name;
    e.stopPropagation()
    // const docId = e.target.getAttribute('data-id');
     
    await deleteLibraryWithContents(user.uid, docId); 
     delete userLibraries[libName];
      namesLibrary.delete(libName);

      // Remove from DOM
      e.target.closest('li').remove();

      console.log(`Library "${libName}" deleted`);
  }
  const libOj=userLibraries[selectedLibraryName]
    if (!libOj) {
      console.log('not fund lib');
      
    };


  // Delete Flashcard
  if (e.target.classList.contains('delete-flashcard')) {
    const docId = e.target.getAttribute('data-id');
    if (!docId) {
    console.error("No ID found for deletion");
    return;
  }
    await deleteFromFirestore(user.uid, libOj.id, 'flashcards', docId);
    libOj.flashcards = libOj.flashcards.filter(card => card.id !== docId);
        quizarray = quizarray.filter(card => card.id !== docId);

    await loadFlashCard(user.uid, libOj.id); 
  }

  // Delete Vocab
  if (e.target.classList.contains('delete-vocab')) {
    const docId = e.target.getAttribute('data-id');
    await deleteFromFirestore(user.uid, libOj.id, 'vocabList', docId);
        libOj.vocabList = libOj.vocabList.filter(card => card.id !== docId);
    quizarray = quizarray.filter(vocab => vocab.id !== docId);

    await loadVocab(user.uid, libOj.id); 
  }
 
});
// vocabBody.addEventListener('click', function (e) {
//   if (e.target.classList.contains('delete-btn')) {
//     const row = e.target.closest('tr');
//     row.remove();
//   }
// })
// -------------------------------------QUIZ--------------------------------------------------------------
// let score = 0;
const takeQuizBtn = document.getElementById('takeQuiz-btn')
const quizLibraryName = document.getElementById('quiz-library-name')
const backArrow3 = document.getElementById('back-arrow3')
backArrow3.addEventListener('click',(e)=>{
    // librarySection.style.display='block'
    quizSection.style.display='none'
     customLibrarySection.style.display ='block'
  })
takeQuizBtn.addEventListener('click',(e)=>{
  hideAllSections()
  quizSection.style.display='block'
})
libraryListParent.addEventListener('click',(e)=>{
  e.preventDefault()
    if (e.target.classList.contains('user-Library')) {
   const  currentLibName = e.target.getAttribute('data-name');
    console.log(currentLibName);
    quizLibraryName.textContent=  currentLibName

    
}


})
// nextQuesBtn.style.marginTop = '2px'

// -----------------------------------------------MAIN FUNCTIONS-----------------------------
 libraryListParent.addEventListener('click', async(e) => {
  // console.log('enter mian func');
  if (e.target.classList.contains('delete-library')) return;

  const li = e.target.closest('.user-Library');
  if (!li) return;
    // if (e.target.classList.contains('user-Library')) {
    selectedLibraryName = li.getAttribute('data-name');
    console.log("Clicked library name:", e.target.getAttribute('data-name'));
console.log("Clicked library name:", selectedLibraryName);

    document.getElementById('create-library-section').style.display = 'none';
    const user = auth.currentUser
    if (!user || !user.uid) {
  console.error('User not logged in or invalid user:', user);
  return;
}
    const libObj = userLibraries[selectedLibraryName];
    if (!libObj || !libObj.id) {
  console.error('Library id missing for:', selectedLibraryName, libObj);
  return;
}

    console.log('selected libarary :',userLibraries[selectedLibraryName]);
    console.log('selected lib name ',selectedLibraryName);
    console.log('user libraray obj :',userLibraries);
    
    customLibrarySection.style.display = 'block';
    librarySection.style.display ="none"
    customLibraryTitle.textContent = selectedLibraryName
    console.log('you opened the library :',selectedLibraryName);
    librarySection.style.display="none"
    if (! selectedLibraryName || !userLibraries[selectedLibraryName]) { console.log('some problem')
    }
    if (!loadedLibraries.has(selectedLibraryName)) {
      await loadFlashCard(user.uid, libObj.id)
          await loadVocab(user.uid, libObj.id)
          loadedLibraries.add(selectedLibraryName)}
          else{
      console.log(`Library "${selectedLibraryName}" already loaded. Skipping reload.`)
      console.log(loadedLibraries);
      renderCustomerFlashCard(selectedLibraryName)
      renderVocab(selectedLibraryName)
      }
      
  
 await resetAndStartQuiz()
             yourScore.innerText = score
 
});
function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}
function showSection( section) {
 const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.style.display = 'none');
  section.style.display = 'block';

}
onAuthStateChanged(auth, async(user) => {
  if (user) {
    // ✅ User is signed in, you can show the logged-in UI
    console.log("User is logged in:", user.email,user);

    // Example: Show library section or home page
    login.style.display = 'none';
    mainHome.style.display = 'block';
    navBar.style.display='block'
    sliderSection.style.display ='block'
    learningSection.style.display ='block'

    nameOfUser.textContent = user.displayName || 'anonymus'
    emailOfUser.textContent = user.email;
   await  loadLibrary(user.uid)
    //      const libraryId = userLibraries[selectedLibraryName].id
    // await loadFlashCard(user.uid, libraryId)

  } else {
    // ❌ No user is signed in, show login page
    console.log("No user is logged in");

    login.style.display = 'block';
    mainHome.style.display = 'none';
    navBar.style.display='none'
  }
});
})



