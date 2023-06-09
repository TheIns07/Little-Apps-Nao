import { useState } from 'react';
import useSpeechRecognition from '../hooks/useSpeechRecognition';



const AudioTexto = () => {
    const { text, isListeling, startListening, stopListening, hasRecognitionSupport } = useSpeechRecognition();

    return (
        <div>
            {hasRecognitionSupport ? (
                <>
                <div>
                    <button onClick={startListening}>Empezar</button>
                    <button onClick={stopListening}>Detener</button>
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
