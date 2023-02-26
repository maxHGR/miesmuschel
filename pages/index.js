import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

    
  
    const handlePopupOpen = () => {
      
        const nonce = Math.floor(Math.random() * 5);
        let result;
    
        switch(nonce) {
          case 0:
            result = "Auf jeden Fall !";
            break;
          case 1:
            result = "Ich glaube eher nicht...";
            break;
          case 2:
            result = "Ja";
            break;
          case 3:
            result = "Nein";
            break;
          case 4:
            result = "Frag doch einfach nochmal";
            break;
        }
        
        setPopupContent(result);
      
    };

    const overlayStyle = {
      backgroundImage: 'url("/images/flowers.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };

    
 
  return (
    <>
      <main>
        <button onClick={() => setIsOpen(true)}>Click me</button>
        <Popup 
          open={isOpen} 
          onClose={() => setIsOpen(false)} 
          onOpen={handlePopupOpen}
          overlayStyle={overlayStyle}
        >
          <div>{popupContent}</div>
        </Popup>
      </main>
    </>
  )
}
