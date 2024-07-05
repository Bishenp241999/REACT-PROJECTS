import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Samy",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Meghu",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Ruppu",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend() {
    setShowAddFriend(prev => !prev)
  }

  function handleAddFriend(newFriend) {
    setFriends(prev => [...prev, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend(prevSelected => prevSelected?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends(friends =>
      friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend));

    setSelectedFriend(null)
  }
  return (
    <>
      <h1 style={{ fontSize: '40px', color: 'orange', textAlign: 'center', marginBottom: '20px' }}>EAT-N-SPLIT App</h1>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          {
            showAddFriend &&
            <FormAddFriend onAddFriend={handleAddFriend} />
          }

          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? 'Close' : 'Add Friend'}
          </Button>
        </div>

        {selectedFriend && <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}

        />}
      </div>
    </>
  )
}

export default App
