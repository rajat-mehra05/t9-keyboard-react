import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import InputField from './components/InputField';
import Keypad from './components/Keypad';

function App() {
  const [text, setText] = useState("");

  return (
    <div className='flex justify-center items-center min-h-screen flex-col'>
      <InputField text={text} setText={setText} />
      <Keypad text={text} setText={setText} />
      <Footer />
    </div>
  );
}

export default App;
