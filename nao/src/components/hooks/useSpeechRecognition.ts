import { useEffect, useState } from "react";
let recognition: any = null;

if("webkitSpeechRecognition" in window){
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-MX";
}

const useSpeechRecognition = () => {

    const [text, setText] = useState('');
    const [isListeling, setIsListening] = useState(false)

    useEffect(() => {
        if(!recognition) return 
            recognition.onResult = (event: SpeechRecognitionEvent) => {
                setText(event.results[0][0].transcript)
                recognition.stop();
                setIsListening(false);
            }
        
    }, [])
    
    const startListening = () => {
        setText("")
        setIsListening(true)
        recognition.start();
    }

    const stopListening = () => {
        setIsListening(false)
        recognition.stop();
    }

    return {
        text, isListeling, startListening,  stopListening, hasRecognitionSupport: !!recognition
    }
}

export default useSpeechRecognition;