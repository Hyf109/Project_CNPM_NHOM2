import { createContext, useContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user profile based on the provided ID
  const fetchUserProfile = async (id) => {
    try {
      const response = await fetch(`/finder/api/user/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
      const data = await response.json();
      setProfile(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const updateUserProfile = async (update_body) => {
    try {
      const response = await fetch('/finder/api/user', {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update_body),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }
  
      const updatedFields = await response.json();
  
      setProfile((prevProfile) => ({
        ...prevProfile,
        ...updatedFields,
      }));
  
    } catch (error) {
      console.error('Error updating user profile:', error.message);
      // Handle error (e.g., show an error message to the user)
    }
  };
  
  return (
    <ProfileContext.Provider value={{profile, updateUserProfile, fetchUserProfile}}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;

export const useProfile = () => {
  return useContext(ProfileContext);
};
