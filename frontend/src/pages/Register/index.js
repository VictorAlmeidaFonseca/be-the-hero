import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../service/api'

import './styles.css';

import LogoImg from '../../assets/logo.svg';



export default function Register() {
    
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ uf, setUf ] = useState('');

    const history = useHistory();
    
    async function handleResgister(e) {

        try {
            
            e.preventDefault();

            const data = {
                name,
                email,
                whatsapp,
                cidade,
                uf
            }

            const response = await api.post('ongs', data);

            alert(`Your access ID is: ${response.data.id}`);

            history.push('/')

        } catch (error) {

            alert('We have some problem try')

         }
    };
    
       
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
                <form onSubmit={ handleResgister }>

                <input 
                    placeholder="Ong's name"
                    value={name}
                    onChange = { e => setName( e.target.value )}
                />
                
                <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange = { e=> setEmail( e.target.value )}
                />
                <input 
                    placeholder="Whatsapp" 
                    value={whatsapp}
                    onChange = { e => setWhatsapp( e.target.value )}
                />

                <div className="input-group">
                    
                    <input 
                        placeholder="City" 
                        value = {cidade}
                        onChange = { e => setCidade( e.target.value )}
                    />

                    <input 
                        placeholder="UF" 
                        style={{ width : 80}} 
                        value = {uf}
                        onChange = { e => setUf( e.target.value )}
                    />
                </div>

                
                <button className="button" type="submite"> Register </button>
                </form>

            </div>
        </div>
    );
}