import Button from "./Button"
/* eslint-disable react/prop-types */
export default function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt="image" />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} Rs.{Math.abs(friend.balance)}</p>
            ) 
            }
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you Rs.{Math.abs(friend.balance)}</p>
            )
            }
            {friend.balance === 0 && (
                <p>
                    You and {friend.name} are Even</p>
            )
            }
            <Button onClick={() => onSelection(friend)}>
                {isSelected ? 'Close' : 'Select'}
            </Button>
        </li>
    )
}