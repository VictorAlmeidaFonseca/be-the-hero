import React from 'react';
import  { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from  'react-icons/fi';

import LogoImg from '../../assets/logo.svg'

import './styles.css';


export default function Profiler() {
    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="be the hero"/>
                <span>Wellcome!</span>

                <Link className="button" to="incidents/new"> Add new incident</Link>
                <button type="button"> 
                <FiPower size={18} color="#e02041"></FiPower>
                 </button>
            </header>

            <h1>List of cases</h1>

           <ul>
               <li>
                   <strong>CASE: </strong>
                   <p>Case 1</p>
                   
                   <strong>DESCRIPTION: </strong>
                   <p>Description teste</p>

                   <strong>VALUE: </strong>
                   <p>$ 123</p>

                   <button type="button">
                   <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>

                   </button>
              </li>
              <li>
                   <strong>CASE: </strong>
                   <p>Case 1</p>
                   
                   <strong>DESCRIPTION: </strong>
                   <p>Description teste</p>

                   <strong>VALUE: </strong>
                   <p>$ 123</p>

                   <button type="button">
                   <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>

                   </button>
              </li>
              <li>
                   <strong>CASE: </strong>
                   <p>Case 1</p>
                   
                   <strong>DESCRIPTION: </strong>
                   <p>Description teste</p>

                   <strong>VALUE: </strong>
                   <p>$ 123</p>

                   <button type="button">
                   <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>

                   </button>
              </li>
              <li>
                   <strong>CASE: </strong>
                   <p>Case 1</p>
                   
                   <strong>DESCRIPTION: </strong>
                   <p>Description teste</p>

                   <strong>VALUE: </strong>
                   <p>$ 123</p>

                   <button type="button">
                   <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>

                   </button>
              </li>
           </ul>

            
        </div>
    );
};