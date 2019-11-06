import React from 'react';
import errorImage from './Error.png';
import  './error-indicator.css';

const ErrorIndicator=(props)=>{
    return(
        <div className="error-indicator">
            <h2>Возникла ошибка!</h2>
            <img className="error-indicator__image" src={errorImage} alt="error"></img>
        </div>
    );
}
export default ErrorIndicator;