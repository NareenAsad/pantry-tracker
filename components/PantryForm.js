import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import styles from '../styles/PantryForm.module.css';

const PantryForm = ({ fetchItems, selectedItem, setSelectedItem }) => {
  const [name, setName] = useState(selectedItem ? selectedItem.name : '');
  const [quantity, setQuantity] = useState(selectedItem ? selectedItem.quantity : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedItem) {
      const itemDoc = doc(db, "pantryItems", selectedItem.id);
      await updateDoc(itemDoc, { name, quantity });
    } else {
      await addDoc(collection(db, "pantryItems"), { name, quantity });
    }
    setName('');
    setQuantity('');
    setSelectedItem(null);
    fetchItems();
  };

  const handleDelete = async () => {
    if (selectedItem) {
      const itemDoc = doc(db, "pantryItems", selectedItem.id);
      await deleteDoc(itemDoc);
      setName('');
      setQuantity('');
      setSelectedItem(null);
      fetchItems();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        required
      />
      <Box display="flex" justifyContent="flex-end" gap={5}>
        <Button type="submit" variant="contained" color="primary" size="medium">
          {selectedItem ? 'Update' : 'Add'}
        </Button>
        {selectedItem && (
          <Button onClick={handleDelete} variant="contained" color="secondary" size="medium">
            Delete
          </Button>
        )}
      </Box>
    </form>
  );
};

export default PantryForm;