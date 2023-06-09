import { useState } from 'react';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

const { text, isListeling, startListening, hasRecognitionSupport } = useSpeechRecognition();


const AudioTexto = () => {
    return (
        <div>
            {hasRecognitionSupport ? (
                <>
                <div>
                    <button onClick={startListening}>Empezar</button>
                </div>
                {isListeling ? <div>Escuchando...</div> : null}
                {text}
                </>

            ) :
                <>
                <div>No hay soporte</div>
                </>
            }
        </div>
    )
}


export default AudioTexto;
