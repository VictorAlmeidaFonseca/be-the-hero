import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />
                <form>
                    <h1>Sing in</h1>
                    <input placeholder="Your ID" />
                    <button  className="button" type="submit">Next</button>
                    <a href="*/register" >
                        <FiLogIn size={16} color="#E02041" />
                        Create account
                    </a>
                </form>
            </section>
            <img src={herosImg} alt="Heros" />
        </div>       
    );
}