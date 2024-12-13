import { useEffect, useState } from "react";
import { UserDataObserver } from '../services/firebase'

export function useUser() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
        const unsubscribe = new UserDataObserver()
            .authorized(currentUser => setUser(currentUser))
            .unauthorized(() => setUser(null))
            .subscribe()
        return () => unsubscribe();
    }, []);
  
    return [user, setUser];
}