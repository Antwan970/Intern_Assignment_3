import React from 'react'
import Card from "./components/card";

const Data=[
  
  {
    head: "Name",
    text: "Antwan Michael, Computer Engineering student at AAST.",
  },
  {
    head: "Education",
    text: "Arab Academy for Science, Technology & Maritime Transport (AAST), majoring in Computer Engineering.",
  },
  {
    head: "Skills",
    text: "Java, Spring Boot, React, JavaScript, Python, SQL, Git, HTML/CSS, and more.",
  },
  {
    head: "Projects",
    text: "Smart Parking System, Library Management System, Email & Voice Messaging Apps, Pixar Data Analytics.",
  },
  {
    head: "Internship",
    text: "Cybersecurity intern, with beginner experience in bug bounty hunting.",
  },
  {
    head: "Interests",
    text: "Cybersecurity, web development, systems design, AI, and automation.",
  },
];

export const App = () => {
  return (
     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text align-middle underline">About Me</h1>
      {Data.map((card, index) => (
        <Card key={index} head={card.head} text={card.text} />
      ))}
    </div>
  );
 
}
 export default App;
