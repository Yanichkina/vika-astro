import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Astrology from './components/Astro/Astrology'
import Tarot from './components/Taro/Tarot';
import Info from './components/Info/Info';
import Yoga from './components/Yoga/Yoga';
import SocialLinks from './components/SocialLink/SocialLink';


const App = () => {

    return (
        <div className='site-content'>
            <Header />
            <div className="container">
            
                <HomePage />
                <Astrology />
                <Info />
                <Tarot />
                <Yoga />
                <SocialLinks />
            </div>
        </div>
    );
};

export default App;