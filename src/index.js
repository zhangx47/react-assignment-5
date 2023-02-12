import React from 'react';
import { createRoot } from 'react-dom/client';
import userImage1 from 'https://uscwebdev.github.io/itp301-submissions-zhangx47/assignment_5/images/user_1.jpg';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <h1>Cabra</h1>
    <p>
      <a href="https://thehoxton.com/downtown-la/">
        Part of The Hoxton, Downtown LA
      </a>
      , Cabra is a spirited rooftop dining and drinking destination inspired by
      the vibrant flavors of Peruvian Cuisine.
    </p>

    <h2>Celebrate Valentine’s Week</h2>
    <p>
      February 10th - February 14thCozy up on the rooftop Valentine’s Week with
      your sweetheart or friends. Enjoy a romantic à la carte dinner featuring
      fresh ceviche, salmon skewers, wood-fire skirt steak, and more. Savor the
      romance with a glass of wine and decadent desserts while enjoying a
      mesmerizing view of the city skyline.
    </p>
    <h2>Weekend Brunch</h2>
    <p>
      Served from 10:30am to 3pm every Saturday and Sunday, our brunch menu
      includes highlights like quinoa sourdough french toast, wood-fired skirt
      steak and eggs, crab causa, and more!
    </p>
    <h3>Users</h3>
    <ul>
      <li className="selected">Crispy Pork Shank</li>
      <li className="selected">Salmon Ceviche</li>
      <li className="selected">Bass Ceviche</li>
    </ul>
    {/* {} */}
    {/* <img src={userImage1} alt="User One" /> */}
  </React.StrictMode>
);
