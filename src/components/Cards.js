import React from 'react';
import './Cards.css';
import CardItems from './CardItems';


function Cards() {
  return (
    <div className='cards'>
      <h1>The Design Process</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src='assets/originalWireframe1.png'
              text='The Original Wireframe'
              label='Adventure'
              path='/designsection'
            />
            <CardItems
              src='assets/homepagewireframe.jpeg'
              text='Second Design for Homepage Wireframe'
              label='Homepage Wireframe'
              path='/designsection'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src='assets/wireframe2.jpeg'
              text='Second Wireframe'
              label='Design Section Wireframe'
              path='/designsection'
            />
            <CardItems
              src='assets/wireframe3.jpeg'
              text='Third Wireframe'
              label='Design Section Part 2'
              path='/designsection'
            />
            <CardItems
              src='assets/wireframe4.jpeg'
              text='Internet Art Section Wireframe'
              label='Internet Art'
              path='/designsection'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
