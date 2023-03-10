import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated &&(
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>Hi {user.name} !</h2>
                <h4>is this your email: {user.email} ?</h4>
                <h4>All your user info: </h4>
                <p>{JSON.stringify(user)}</p>
            </div>
        )
    )
}