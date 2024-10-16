//Napiši React komponentu koja prima ime i prezime kao props i ispisuje ih u parafraph.
import React from 'react';

interface PunoimeProps {
  ime: string;
  prezime: string;
}

const PunoIme: React.FC<PunoimeProps> = ({ ime, prezime }) => {
  return (
    <div>
        <p>
        Ime: {ime} <br></br> Prezime: {prezime}
        </p>
    </div>
  );
};

export default PunoIme;
