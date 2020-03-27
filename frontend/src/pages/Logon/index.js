import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link  className="back-link" to ="/register" >
                        <FiLogIn size={16} color="#E02041" />
                        Create account
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heros" />
        </div>       
    );
}