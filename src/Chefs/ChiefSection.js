
import React from 'react';
import "./ChiefSection.css";
import ChiefCard from '../Chefs/ChiefCard';
import a from "../images/chief1.jpg"
import b from "../images/chief2.jpg"
import c from "../images/chief3.jpg"
import d from "../images/chief4.jpg"
import e from "../images/chief5.jpg"
import f from "../images/chief6.jpg"

function ChiefSection() {
    const chiefs = [
        {
            id: 1,
            name: "Juan Carlos",
            img: a,
            recipesCount: 10,
            cuisine: "Mexican",
            
        },
        {
            id: 2,
            name: "John Doe",
            img: b,
            recipesCount: 5,
            cuisine: "Japanese",
        },
        {
            id: 3,
            name: "Erich Maria",
            img: c,
            recipesCount: 13,
            cuisine: "Italian",
        },
        {
            id: 4,
            name: "Chris Brown",
            img: d,
            recipesCount: 8,
            cuisine: "American"
        },
        {
            id: 5,
            name: "Blake Lively",
            img: e,
            recipesCount: 9,
            cuisine: "French"
        },
        {
            id: 6,
            name: "Ben Affleck",
            img: f,
            recipesCount: 4,
            cuisine: "Indian"
        }
    ];

    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief => <ChiefCard key={chief} chief={chief} />)}
            </div>
        </div>
    );
}

export default ChiefSection;



