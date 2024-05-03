import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Badge, FloatingLabel} from "react-bootstrap";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
      {/*          <img src={user.picture} alt={user.name} />*/}
                <Badge bg="success">{user.name}</Badge>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default Profile;