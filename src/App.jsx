// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ProfileInfo from './components/ProfileInfo';
import ContactsList from './components/ContactsList';
import './App.css';

function App() {
    return (
    <>
        <div className="Cima">
        </div>
        <div className="container">
            <Header />
            <div className="main-content">
                <ProfileInfo />
                <ContactsList />
            </div>
        </div>
    </>
    );
}

export default App;
