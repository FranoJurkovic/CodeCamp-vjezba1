import React from "react";
import PorukaGodina from './godine'; // import
import TemperaturaPoruka from './toplohladno'; // import
import Status from './prijava';// import
import PunoIme from './punoime';// import
import Info from './info';// import
import IspisKorisnika from './ispiskorisnika';// import
import Niz from './niz';// import

export const App: React.FC = () => {
  return (
    <div>
      <h1>1. zadatak komponenta godine.tsx</h1>
      {/* Koristi komponentu i proslijedi prop `godina` */}
      <PorukaGodina godina={20} />
      
      <h1>2. zadatak komponenta toplohlado.tsx</h1>
      {/* Koristi komponentu i proslijedi prop `temperature` */}
      <TemperaturaPoruka temperatura={20} />

      <h1>3. zadatak komponenta prijava.tsx</h1>
      {/* Koristi komponentu i proslijedi prop `temperature` */}
      <Status logiran={false} />

      <h1>4. zadatak komponenta punoime.tsx</h1>
      {/* Koristi komponentu i proslijedi prop `temperature` */}
      <PunoIme ime="Frano" prezime="Jurković"/>

      <h1>5. zadatak komponenta info.tsx</h1>
      {/* Koristi komponentu i proslijedi prop `temperature` */}
      <Info ime="Frano" prezime="Jurković" godinaRođenja={2000}/>

      <h1>6. zadatak komponenta ispiskorisnika.tsx</h1>
      {/* Koristi komponentu i proslijedi prop `temperature` */}
      <IspisKorisnika ime="Frano" prezime="Jurković"/>

      <h1>7. zadatak komponenta niz.tsx</h1>
      {/* Koristi komponentu i proslijedi prop `temperature` */}
      <Niz/>
    </div>
  );
};

export default App;