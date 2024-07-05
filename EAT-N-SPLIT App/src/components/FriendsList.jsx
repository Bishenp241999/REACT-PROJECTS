import Friend from "./Friend";
/* eslint-disable react/prop-types */
export default function FriendsList({ friends, onSelection, selectedFriend }) {
    return (
        <>
            <ul className="sidebar">
                {friends.map(friend => <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />)}
            </ul>
        </>
    )
}