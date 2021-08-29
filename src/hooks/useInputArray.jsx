import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('5文字以下にしてください');
      return;
    }
    setText(e.target.value.trim());
  }, []);
  const handleAdd = useCallback(() => {
    setArray((prevState) => {
      if (prevState.some((item) => item === text)) {
        alert('同じ要素がすでに存在します');
        return prevState;
      }
      const newState = [...prevState, text];
      return newState;
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
