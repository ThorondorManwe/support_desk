/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn]  = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(false);

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {

        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [user]);
}