import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg';

import api from '../../service/api'


export default function NewIncident(){

    const [titulo, setTitulo ] = useState('');
    const [description, setDescription ] = useState('');
    const [value, setValue ] = useState('');

    const ongId = localStorage.getItem('ongId')

    const history = useHistory();


    async function handleNewIncident (e) {

        e.preventDefault()

        const data = {
            titulo,
            description,
            value
        }

        try {

            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }               
            });

            history.push('/profile')
            
        } catch (err) {

            alert('We have some problems. Try again');

        }

    };

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
            <img src={LogoImg} alt="Be the Hero"/>

            <h1>Add new case</h1>
            <p>Describe your case. We'll find the hero for you.</p>

            <Link className="back-link" to ="/profile" >
                    <FiArrowLeft size={16} color="#E02041" />
                    Back to home
            </Link>
            
            </section>
            <form onSubmit = { handleNewIncident }>
            
            <input 
                placeholder="Title"
                value={titulo}
                onChange = { e => setTitulo(e.target.value)} 
            />
            
            <textarea
                placeholder="Description"
                value={description}
                onChange = { e => setDescription(e.target.value)}
            />
            
            <input 
                placeholder="Value" 
                value={value}
                onChange = { e => setValue(e.target.value)}

            />

                       
            <button className="button" type="submite"> Register </button>
            </form>

        </div>
    </div>
    );
};