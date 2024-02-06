"use client"

import { signOut } from 'next-auth/react';

import { Button } from "./ui/button";
import { useEffect } from 'react';

const UserAccountnav = () => {

    useEffect(() => {

    }, []);

    return ( 
        <Button variant="outline" onClick={ () => signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
        }) }>
            Sign Out
        </Button>
    );
}
 
export default UserAccountnav;