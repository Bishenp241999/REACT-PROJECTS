import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(prevItem => {
      return [...prevItem, item]
    })
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleDeleteItemsList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if (confirmed) setItems([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteItemsList={handleDeleteItemsList}
      />
      <Stats items={items} />
    </>
  )
}

export default App
