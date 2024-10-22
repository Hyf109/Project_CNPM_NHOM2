import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data from server');
                }
                return res.json();
            })
            .then(data => {
                if (!abortCont.signal.aborted) {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                }
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    if (!abortCont.signal.aborted) {
                        setIsPending(false);
                        setError(err.message);
                    }
                }
            })

        return () => abortCont.abort();
    }, [url]);

    console.log(data);

    return { data, isPending, error };
}

export default useFetch;