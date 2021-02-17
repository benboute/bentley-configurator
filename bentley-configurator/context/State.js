import { createContext, useContext, useState } from 'react';

export const Car = createContext([{}, () => {}]);

export function AppWrapper({ children }) {
  const [state, setState] = useState({color: {id:1, code:"#000000", title:"black"}});  

  return (
    <Car.Provider value={[state, setState]}>
      {children}
    </Car.Provider>
  );
}

export function useAppContext() {
  return useContext(Car);
}
