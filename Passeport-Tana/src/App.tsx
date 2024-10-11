import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './App.css';
import Card from './components/Card';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';

function App() 
{
  /* Variables */ 
  const [img, setImg] = useState(null);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState();
  const [birth, setBirth] = useState(null);
  const [expire, setExpire] = useState(null);
  const passeportRef = useRef(null); 

  /** Fonctions **/
  const handleDownload = () => 
  {
    const element = passeportRef.current; 
    
    if (element) {
      html2canvas(element).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download =   `passeport-${nom}_${prenom}.png`; // Nom du fichier téléchargé
        link.click();
      }).catch((error) => {
        console.error('Erreur lors de la génération de l\'image :', error);
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleUpdate = (e) => {
    const clicked = document.getElementById("form");

       if(clicked?.style.display == 'none')
       {
         clicked.style.display = 'block';
       }
       else 
       {
         clicked.style.display = 'none';
       }
    }
  return (
    <>
      <div className="formulaire">
        <form action="" id='form'>

          <input style={{marginTop: '10px'}}
            type="file" 
            onChange={handleFileChange}
          />
          
          {img && (
            <img src={img} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          )}
          
          <div className="flex-auto">
            <InputText value={nom} onChange={(e) => setNom(e.target.value)} placeholder='Nom' />
            <InputText value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder='Prénom' />
            <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />
            <Calendar 
              value={birth} 
              onChange={(e) => setBirth(e.value)} 
              placeholder='Birth Day'
            />
            <Calendar 
              value={expire} 
              onChange={(e) => setExpire(e.value)} 
              placeholder='Expire Day'
            />     
          </div>  
          
        </form>

        <div className="btns">
          <Button onClick={handleUpdate}>Modifier</Button>
          <Button onClick={handleDownload}>Télécharger</Button>
        </div>
        
      </div>

      {/* Div à capturer */}
      <div ref={passeportRef}>
        <Card 
          image={img}
          nom={nom}
          prenom={prenom}
          age={age}
          birthday={birth ? birth.toLocaleDateString() : ''}      
          expire={expire ? expire.toLocaleDateString() : ''}
        />
      </div>
    </>
  );
}

export default App;
