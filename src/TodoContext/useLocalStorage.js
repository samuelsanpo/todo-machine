import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem = [];
    
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        } catch (ex){
          setLoading(false);
          setError(true);
        }
      }, 2000)

    }, [])

  

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {
      item, 
      saveItem, 
      loading, 
      error};
  
  }

  export { useLocalStorage }

  
// const defaultTodos = [
//   { text: 'Test 1', completed: true },
//   { text: 'Test 2', completed: false },
//   { text: 'Test 3', completed: false }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');
