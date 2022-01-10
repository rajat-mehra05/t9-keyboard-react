import { useRef, useState } from "react"

const Button = ({content, setText}) => {  
    const [counter, setCounter] = useState(0); 
    const [isLongPressed, setIsLongPressed] = useState(false);
    const timer = useRef(null)  
    const longPressTimer = useRef(null)   

    const handleLongClick = () => {
       setIsLongPressed(false); 
        longPressTimer.current = setTimeout(() => {
            setIsLongPressed(true);
               setText((prev) => prev + content.key)
            },1000);            
    }

    const handleCancelLongPress = () => {
        
        clearTimeout(longPressTimer.current);
        if(isLongPressed) return;

        if(timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            setText((prev) => prev + content.symbols[counter]);
            setCounter(0);
        }, 400)
        
        setCounter((prev) => {
            if(counter === content.symbols.length - 1) return 0;
            return prev + 1;       
        });
        
    }

    return (
        
            <button  
            onMouseDown={handleLongClick}
            onMouseUp={handleCancelLongPress}
            className='bg-zinc-900 flex flex-col items-center rounded w-24 p-2 text-white'> 
                <p> {content.key} </p>
                <p> 
                {
                    content.key === 0 ? '⎵' :   content.symbols.map((symbol, index) => (
                         
                         <span key={index}> 
                            {symbol}
                          </span>
                     ))   
                }   
                </p>
            </button> 
    )
}

export default Button
