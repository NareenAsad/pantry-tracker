// pages/index.js
import { useState } from 'react';
import PantryForm from '@/components/PantryForm';
import PantryList from '@/components/PantryList';
import { Container, Typography, Box } from '@mui/material';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchItems = () => {
    // This function will be passed to PantryForm and PantryList to refresh the items
  };

  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom fontFamily="BlinkMacSystemFont">
        Pantry Tracker
      </Typography>
      <PantryForm fetchItems={fetchItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Box sx={{ mt: 4, p: 2, bgcolor: 'palevioletred', boxShadow: 3, borderRadius: 2 }}>
        <PantryList setSelectedItem={setSelectedItem} />
      </Box>
    </Container>
  );
}
