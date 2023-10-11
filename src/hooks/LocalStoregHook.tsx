import { useState } from "react";
 
const useLocalStorage = (key, defaultValue) => {
    const [localStorageValue, setLocalStorageValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
           
            if (item) {
                return JSON.parse(item)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue
            }
        } catch (error) {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue
        }
    })
    
    const setValue = value => {
        try {
          setLocalStorageValue(value);
          localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.log(error);
        }
      };
    
      const removeValue = () => {
        try {
            setLocalStorageValue(null);
           localStorage.removeItem(key);
        } catch (error) {
          console.log(error);
        }
      };
      
      return [localStorageValue, setValue, removeValue];
}
export default useLocalStorage; 