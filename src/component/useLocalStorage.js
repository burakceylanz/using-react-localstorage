import {useState} from 'react'

function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorageValue] = useState(()=> getLocalStorageValue(key, initialValue))

    const setValue = (value)=>{
        // Check if function
       const valueStore = value instanceof Function ? value(localStorageValue):
       value
        //Set to state
        setLocalStorageValue(value)
        //set to local storage
        localStorage.setItem(key, JSON.stringify(valueStore))
    }

    function getLocalStorageValue(key, initialValue){
        const itemFromStorage = localStorage.getItem(key)
        return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
    }

    return [localStorageValue, setValue]
}

export default useLocalStorage