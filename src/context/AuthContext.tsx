import React, { createContext, useContext, useEffect, useState } from "react";
import pb from "../services/pocketbase";

// Define your user profile interface. Adjust the fields to match your PocketBase schema.
export interface UserProfile {
    id: string;
    email: string;
    preferredLanguageId?: string;
    preferredLanguageName?: string;
    preferredDifficultyId?: string;
    preferredDifficultyName?: string;
}

interface AuthContextType {
    user: UserProfile | null;
    token: string | null;
    setUser: (user: UserProfile | null) => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    token: null,
    setUser: () => { },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserProfile | null>(null);

    useEffect(() => {
        // Manually load authentication data from localStorage.
        // Check the key that PocketBase uses to store auth data.
        const storedAuth = localStorage.getItem("pocketbase_auth"); // Change this key if necessary.
        if (storedAuth) {
            try {
                const authData = JSON.parse(storedAuth);
                // Assign the token and model to authStore.
                pb.authStore.token = authData.token;
                pb.authStore.model = authData.model;
            } catch (error) {
                console.error("Error parsing stored auth data:", error);
            }
        }

        // If we have a valid token, fetch the user profile.
        if (pb.authStore.isValid) {
            pb.collection("users")
                .getOne(pb.authStore.model.id)
                .then((record) => {
                    setUser({
                        id: record.id,
                        email: record.email,
                        preferredLanguageId: record.preferredLanguageId,
                        preferredLanguageName: record.preferredLanguageName,
                        preferredDifficultyId: record.preferredDifficultyId,
                        preferredDifficultyName: record.preferredDifficultyName,
                    });
                })
                .catch((err) => console.error("Error fetching user profile", err));
        }
    }, []);

    const token = pb.authStore.token;

    return (
        <AuthContext.Provider value={{ user, token, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
