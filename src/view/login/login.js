import React, { useState } from 'react';
import './login.css';

import firebase from '../../config/firebase';
/* import 'firebase/auth'; */
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux'

function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsgTipo] = useState('');

    const dispatch = useDispatch();

    function logar() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha).then(res => {
            setMsgTipo('sucesso')
            setTimeout(() =>{
            dispatch({type: 'LOG_IN', usuarioEmail: email});
            }, 1500 );
        }).catch(error => {
            setMsgTipo('erro')
        });

    };
    
    return(
        <>
            {
                useSelector(state => state.usuarioLogado) > 0 ? <Navigate to='/'/> : null
            }
            <div className="login-content d-flex align-items-centr">
                <form className="form-signin mx-auto ">
                    <h1 className="h3 mb-3 fw-normal text-center text-white fw-bold">Login</h1>

                    <div className="form-floating">
                        <input onChange={(e) => setEmail(e.target.value) } type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input onChange={(e) => setSenha(e.target.value) } type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha"/>
                        <label htmlFor="floatingPassword">Senha</label>
                    </div>

                    <button className="w-100 mt-1 btn btn-lg btn-login text-center" type='button' onClick={logar}>Logar</button>

                    <div className="msd-login text-center text-white">

                        {msgTipo === 'sucesso' ?  <span><strong>WoW!</strong> Você esta conectado! &#128526;</span> : '' }
                            
                        {msgTipo === 'erro' ? <span><strong>Ops!</strong> Verifique se os dados estão corretos&#128546;</span> : ''}

                    </div>

                    <div className="opcoes-login mt-4">
                        <a href='#' className="mx-2">Recuperar senha</a>
                        <span className='text-white'>&#9733;</span>
                        <Link to='/cadastrar-usuario' className=" mx-2 ">Cadastre aqui !</Link>
                    </div>
            </form>

            </div>
        </>
    )
}

export default Login;