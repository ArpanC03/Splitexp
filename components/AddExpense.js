import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native-web';
import axios from 'axios';

const AddExpense = ({ onExpenseAdded }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [group, setGroup] = useState('');

  const handleSubmit = () => {
    const expenseData = {
      title,
      amount,
      date,
      group,
    };

    axios.post('http://127.0.0.1:8000/api/expenses/', expenseData)
      .then(response => {
        console.log('Expense added:', response.data);
        onExpenseAdded(response.data); // Update parent component with new expense
        // Clear form fields after submission
        setTitle('');
        setAmount('');
        setDate('');
        setGroup('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <TextInput 
        placeholder="Title" 
        value={title} 
        onChangeText={setTitle} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Amount" 
        value={amount} 
        onChangeText={setAmount} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Date (YYYY-MM-DD)" 
        value={date} 
        onChangeText={setDate} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Group (optional)" 
        value={group} 
        onChangeText={setGroup} 
        style={styles.input} 
      />
      <Button title="Add Expense" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AddExpense;
