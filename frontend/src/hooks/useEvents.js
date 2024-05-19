import { useState, useEffect } from 'react';

const useEvents = (queryParams) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/finder/api/event/get', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(queryParams)
                });
                if (!response.ok) {
                    throw new Error('Could not fetch the data');
                }
                const result = await response.json();
                setData(result.event);
                setIsPending(false);
                setError(null);
            } catch (err) {
                setIsPending(false);
                setError(err.message);
            }
        };

        fetchEvents();
    }, [queryParams]);

    console.log(data);

    return { data, isPending, error };
};

export default useEvents;
