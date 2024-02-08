import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component


const peopleData = [
    {
        name: "Ruixue Gou",
        title: "Product Manager",
        image: "path/to/jane.jpg",
        description: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."

           },
    {
        name: "Yenyi Lee",
        title: "Infrastructure Engineer",
        image: "path/to/bob.jpg",
        description: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
   
            },
    {   
        name: "Chupei Yan",
        title: "Backend Developer",
        image: "path/to/john.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."

        },
    {
        name: "Yuting Xing",
        title: "Frontend Developer",
        image: "path/to/alice.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
    
         }
];

function Contact() {
    return (
        <div className="contact">
            <Navbar />
            <h1>Contact</h1>
            <div className="boxes">
                {peopleData.map((person, index) => (
                    <div className="box" key={index}>
                        <img src={person.image} alt={person.name} />
                        <h2>{person.name}</h2>
                        <h2>{person.title}</h2>
                        <p>{person.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;