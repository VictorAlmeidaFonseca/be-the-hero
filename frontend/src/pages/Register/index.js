import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={LogoImg} alt="Be the Hero"/>

                <h1>Register</h1>
                <p>Do your register, and help another peoples find out about your ONG's causes.</p>

                <Link className="back-link" to ="/" >
                        <FiArrowLeft size={16} color="#E02041" />
                        Back
                </Link>
                
                </section>
                <form>
                <input placeholder="Ong's name"/>
                <input type="email" placeholder="E-mail"/>
                <input placeholder="Whatsapp" />

                <div className="input-group">
                    <input placeholder="City" />
                    <input placeholder="UF" style={{ width : 80}} />
                </div>

                
                <button className="button" type="submite"> Register </button>
                </form>

            </div>
        </div>
    );
}