//Napiši komponentu koja prima isLoggedIn (boolean) kao props i prikazuje poruku ovisno o tome je li korisnik prijavljen ili ne.
import React from 'react';

interface PrijavaProps {
  logiran: boolean;
}

const Status: React.FC<PrijavaProps> = ({ logiran }) => {
  return (
    <div>
      {logiran ? (
        <p>Korisnik je prijavljen.</p>
      ) : (
        <p>Korisnik nije prijavljen.</p>
      )}
    </div>
  );
};

export default Status;