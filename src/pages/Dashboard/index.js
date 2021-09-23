import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './dashboard.css';
import animationData from './../../assets/logo-react.json';
import Lottie from 'react-lottie';

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="group">
      <div className="body">
      <Lottie options={defaultOptions}
        height={100}
        width={100}
        isStopped={false}
        isPaused={false} />
        <h1>Você está logado!!</h1>
        <br/>
        <button className="signout" onClick={() => signOut()}>Sair</button>
      </div>
    </div>
  )
}

export default Dashboard;
