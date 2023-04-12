import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
            console.log('end press key');
        }, delay);
        return () => {
            clearTimeout(handler);
            console.log('press key.....');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
