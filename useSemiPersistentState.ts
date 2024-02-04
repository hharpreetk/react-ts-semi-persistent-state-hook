import { useEffect, useState, Dispatch, SetStateAction } from "react";

/**
 * A generic hook for managing semi-persistent state using localStorage.
 *
 * @param {string} key - The key under which the state will be stored in localStorage.
 * @param {*} initialValue - The initial value of the state.
 * @returns {[T, Dispatch<SetStateAction<T>>]} - A tuple containing the current state and a function to update it.
 */
const useSemiPersistentState = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    try {
      const storedState = localStorage.getItem(key);
      return storedState ? JSON.parse(storedState) : initialValue;
    } catch (error) {
      // Handle parsing error, fallback to initial value
      console.error("Error parsing localStorage data:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    // Save the value to localStorage whenever it changes
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export { useSemiPersistentState };
