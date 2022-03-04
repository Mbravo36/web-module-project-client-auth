import React, { useEffect } from "react";

export default function FriendList (props) {
    const {getFriends, friends} = props;

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <div>
            <h1>FRIENDS LIST</h1>
            {
            friends.map(fnd => {
                    return (
                    <div key={fnd.id}>
                        <div>{fnd.name} -- {fnd.email}</div>    
                    </div>)
                })
            }
        </div>
    )
}