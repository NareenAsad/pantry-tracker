import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot } from "firebase/firestore";
import { List, ListItem, ListItemText, TextField } from '@mui/material';

const PantryList = ({ setSelectedItem }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchItems = () => {
    const q = query(collection(db, "pantryItems"));
    onSnapshot(q, (querySnapshot) => {
      const itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsArray);
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        halfWidth
      />
      <List>
        {filteredItems.map((item) => (
          <ListItem button key={item.id} onClick={() => setSelectedItem(item)}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PantryList;