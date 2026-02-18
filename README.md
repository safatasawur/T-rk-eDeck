 TürkçeDeck — Full-Stack Vocabulary Learning Web App
TürkçeDeck is a full-stack, cloud-based web application designed to help users learn Turkish vocabulary through interactive flashcards, quizzes, and real-time pronunciation.
The project emphasizes clean JavaScript logic, real-time database synchronization, and browser-native API integration without relying on heavy backend services.

🚀 Live Demo
🔗 https://lnkd.in/dx4jZzSE

📌 Features
📂 Custom Vocabulary Libraries
Create, organize, and manage multiple vocabulary libraries

Each library is stored securely and scoped to the authenticated user

🃏 Interactive Flashcards
Practice Turkish ↔ English translations

Smooth card navigation with dynamic UI updates

📜 Vocabulary Lists
View and review stored words in list format

Ideal for targeted memorization and quick reference

🗑 Library & Data Management
Delete or reorganize libraries without breaking data integrity

Full CRUD support for vocabulary items

🎯 Quizzes with Scoring
Auto-generated quizzes from selected libraries

Real-time scoring and feedback

Prevents duplicate questions and invalid submissions

🎧 Pronunciation (Web Speech API)
Browser-native pronunciation for Turkish and English

Turkish word is spoken first, followed by the English meaning

No backend API calls required, reducing latency and infrastructure cost

⚡ Real-Time Synchronization
Instant data saving and updates using Firestore listeners

No manual refresh required

🏗 System Architecture
Frontend
HTML5, CSS3, Vanilla JavaScript

Event delegation used to manage UI interactions efficiently

Modular JavaScript structure for:

Library management

Flashcards

Quiz logic

Pronunciation control

Responsive, state-driven UI

Backend & Cloud Services
Firebase Authentication for secure user login

Firestore (NoSQL) for real-time, user-specific data storage

Firebase Hosting for deployment and HTTPS delivery

Database Design (Firestore)
Data structured as:

Users
 └── Libraries
      └── Vocabulary Items
Implemented full CRUD operations

Ownership-based access enforced via security rules

🔐 Security & Performance
User authentication required for all data operations

Firestore security rules restrict access to user-owned data only

Optimized event listeners to prevent unnecessary DOM updates

Reduced backend dependency by leveraging browser APIs

🛠 Tech Stack
Frontend

HTML5

CSS3

Vanilla JavaScript

Backend & Cloud

Firebase Authentication

Firestore

Firebase Hosting

APIs

Web Speech API

👨‍💻 My Role & Contributions
Designed and implemented the complete system architecture

Developed frontend UI and JavaScript logic

Designed Firestore database schema

Implemented real-time data synchronization

Integrated browser-native pronunciation API

Deployed and maintained the live application

🔮 Future Improvements
Sentence-building challenges for grammar practice

Daily streaks and achievements

Mobile-first UI enhancements

Accessibility improvements

📄 License
This project is for educational and learning purposes.
