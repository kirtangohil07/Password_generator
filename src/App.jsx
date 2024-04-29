import React, { useState, useCallback, useEffect ,useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8); // Default length of the password
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
//useref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      characters += '0123456789';
    }
    if (charAllowed) {
      characters += '!@#$%^&*()[]{}?';
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  const copypasswordToClipboard = useCallback(()=>{passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)},[password])
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto my-8 p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-6">
        <input
          type="text"
          value={password}
          className="w-full py-2 px-4 bg-gray-200 text-black rounded-lg outline-none"
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copypasswordToClipboard}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigator.clipboard.writeText(password)}
        >
          Copy
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
