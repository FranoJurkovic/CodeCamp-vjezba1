//Napiši React komponentu koja prima ime i prezime kao props i ispisuje ih. 
import React from "react";

interface KorisnikProps {
  ime: string;
  prezime: string;
}

const IspisKorisnika: React.FC<KorisnikProps> = ({ ime, prezime }) => {
  return (
    <div>
      <p>Ime: {ime}, Prezime: {prezime}</p>
    </div>
  );
};

export default IspisKorisnika;