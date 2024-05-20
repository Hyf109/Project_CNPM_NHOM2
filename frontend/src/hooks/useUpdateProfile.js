import { useState } from 'react';

const useUpdateProfile = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const updateProfile = async (profileData) => {
        setIsPending(true);
        try {
            const response = await fetch('/finder/api/user/', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
            });

            if (!response.ok) {
                throw new Error('Could not update profile');
            }

            const data = await response.json();
            setData(data.profile);
            setIsPending(false);
        } catch (err) {
            setError(err.message);
            setIsPending(false);
        }
    };

    return { data, isPending, error, updateProfile };
};

export default useUpdateProfile;
