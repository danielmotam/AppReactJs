import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../services/firebaseConnection';
//import { AuthContext } from '../../contexts/auth';
import './password.css';
import logo from '../../assets/logo512.png';
import { toast } from 'react-toastify';

function Password() {
  const [email, setEmail] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoadingAuth(true);

    if (email !== '') {
      let auth = firebase.auth();
      auth.sendPasswordResetEmail(email).then(function () {
        setLoadingAuth(false);
        toast.success('Email enviado com sucesso!');
      }).catch(function (error) {
        toast.error('Algo deu errado!');
        setLoadingAuth(false);
      });
    }


  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Recuperação de Senha</h1>
          <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">{loadingAuth ? 'Carregando...' : 'Recuperar'}</button>
        </form>

        <Link to="/">Voltar</Link>

      </div>
    </div>
  );
}

export default Password;
