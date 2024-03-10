import React from 'react';
import './Contact.css';
import Header from './Header';

const peopleData = [
    {
        name: "Ruixue Gou",
        title: "Product Manager",
        image: "ruixue.JPG",
        description: "Rachel is a graduate student at Brandeis majoring in Computer Science. She also has a background in Economics and Finance. As an aspiring product manager, she is passionate about addressing real-world challenges and making a meaningful impact. She is professional in dancing and interested in playing piano."
           },
    {
        name: "Yenyi Lee",
        title: "Infrastructure Engineer",
        image: "anny.JPG",
        description: "Anny Lee is currently pursuing her master’s degree in Computer Science at Brandeis University. With a background in linguistics, her academic focus centers on computational linguistics. In her spare time, she enjoys learning languages, singing, and playing badminton."
            },
    {   
        name: "Chupei Yan",
        title: "Backend Developer",
        image: "chupei.JPG",
        description: "Chupei is a dedicated MSCS student at Brandeis University, with a robust business background in Information System Management. Embarking on her journey as a SDE, she is interested in Machine Learning and is committed to continuous growth and exploration. Chupei finds joy in various artistic expressions, including music, piano, as well as movie and novel. Definitely a cat person!"
        },
    {
        name: "Yuting Xing",
        title: "Frontend Developer",
        image: "yuting.PNG",
        description: "Jane Xing, currently navigating the world of Computer Science at Brandeis University. Formerly delving into the world of Economics and Management (yawn!), Jane loves anime, tabletop gaming, and detective novels. Armed with a keen sense of logic and a knack for problem-solving, Jane's biggest dream? Striking it rich, of course!"
         }
];

function Contact({recipes}) {
    return (
        <div>
            <Header title="McDonald's Staff" recipes={recipes}/>
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