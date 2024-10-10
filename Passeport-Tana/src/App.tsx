import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon'
import { ColorPicker } from 'primereact/colorpicker';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
        

function App() 
{
   
  const [img, setImg] =  useState(null)
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState(0);
  const [birth, setBirth] = useState(null);
  const [expire, setExpire] = useState(null);
  const [color, setColor] = useState(null);

        

  const handleNomChange = (e: { target: { value: any; }; }) => {
    const nom = e.target.value;
    setNom(nom);
  }

  const handlePrenomChange = (e: { target: { value: any; }; }) => {
    const prenom = e.target.value;
    setPrenom(prenom);
  }

  const handleAgeChange = (e: { target: { value: any; }; }) => {
    const age = e.target.value;
    setAge(age);
  }

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    
    const file = e.target.files[0];

    if (file)
    {
       const reader = new FileReader();
       reader.onloadend = () => {
       setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <>

      <div className="formulaire">
        <form action="">

          

          <input 
              type="file" 
              onChange={handleFileChange}
          />
          
          { img && (
            
              <img src={img} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
          )}
          
          <div className="flex-auto">
          <InputText value={nom} onChange={(e) => setNom(e.target.value)} placeholder='Nom' />

          <InputText value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder='Prénom'/>
          
          <InputNumber inputId="integeronly" value={age} onValueChange={(e) => setAge(e.value)} placeholder='Age'/>
            

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
      </div>

      <Card 
          image={img}
          nom={nom}
          prenom={prenom}
          age={age}
          birthday={birth ? birth.toLocaleDateString():''}      
          expire={expire ? expire.toLocaleDateString():''}
      />

        
      
       
    </>
  )
}

export default App

