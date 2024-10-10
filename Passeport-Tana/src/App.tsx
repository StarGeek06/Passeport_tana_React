import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { Calendar } from 'primereact/calendar';
        

function App() 
{
   
  const [img, setImg] =  useState(null)
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState(0);
  const [birth, setBirth] = useState(null);
  const [expire, setExpire] = useState(null);

  const handleNomChange = (e) => {
    const nom = e.target.value;
    setNom(nom);
  }

  const handlePrenomChange = (e) => {
    const prenom = e.target.value;
    setPrenom(prenom);
  }

  const handleAgeChange = (e) => {
    const age = e.target.value;
    setAge(age);
  }

  const handleFileChange = (e) => {
    
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
          

          <input 
              type="text"  
              value={nom}
              onChange={handleNomChange}
          />

          <input 
              type="text" 
              value={prenom}
              onChange={handlePrenomChange}
          />
          
          <input 
              type="text" 
              value={age}
              onChange={handleAgeChange}
          />

          <Calendar 
              value={birth} 
              onChange={(e) => setBirth(e.value)} 
          />
          <Calendar 
              value={expire} 
              onChange={(e) => setExpire(e.value)} 
          />        
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
