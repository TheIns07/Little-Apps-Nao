import { useState } from 'react';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

const { text, isListeling, startListening, hasRecognitionSupport } = useSpeechRecognition();


const AudioTexto = () => {
    return (
        <div>
            {hasRecognitionSupport ? (
                <>
                </>

            ) :
                <>
                </>
            }
        </div>
    )
}


export default AudioTexto;
