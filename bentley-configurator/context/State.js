import { createContext, useContext, useState } from 'react';

export const Car = createContext([{}, () => {}]);

export function AppWrapper({ children }) {
  const [configuration, setConfiguration] = useState({car: {color: {id:1, code:"#363636", title:"Dark slate gray"}, hide: {id:1, name:"Amalfi", price:"0"}, rims: {id:1, name:"Default", price:"0"}}});  
 

  return (
    <Car.Provider value={[configuration, setConfiguration]}>
      {children}
    </Car.Provider>
  );
}

export function useAppContext() {
  return useContext(Car);
}
