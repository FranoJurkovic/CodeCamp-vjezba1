//Kreiraj komponentu koja prima temperaturu kao props i prikazuje poruku "Toplo" ili "Hladno" ovisno o vrijednosti temperature.
import React from 'react';

interface TemperaturaProps {
  temperatura: number;
}

const TemperaturaPoruka: React.FC<TemperaturaProps> = ({ temperatura }) => {
  return (
    <div>
      {temperatura >= 20 ? (
        <p>Toplo</p>
      ) : (
        <p>Hladno</p>
      )}
    </div>
  );
};

export default TemperaturaPoruka;