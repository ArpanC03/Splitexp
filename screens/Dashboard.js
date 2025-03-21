import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
import axios from 'axios';
import Header from '../components/Header';
import OverviewCard from '../components/OverviewCard';
import Tabs from '../components/Tabs';
import AddExpense from '../components/AddExpense';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from the Django API
    axios.get('http://127.0.0.1:8000/api/expenses/')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleExpenseAdded = (newExpense) => {
    // Update expenses list when a new expense is added
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };

  return (
    <View style={styles.container}>
      <Header email="arpanc1513@gmail.com" />
      <Text style={styles.dashboardTitle}>Dashboard</Text>

      {/* Overview Cards */}
      <View style={styles.overviewContainer}>
        <OverviewCard title="Total Spent" value="₹300.00" description="Total amount you've paid" />
        <OverviewCard title="You Owe" value="₹0.00" description="Total amount you need to pay" />
        <OverviewCard title="Expenses" value={`${expenses.length}`} description="Total number of expenses" />
        <OverviewCard title="Groups" value="0" description="Total number of groups" />
      </View>

      {/* Add Expense Button */}
      <AddExpense onExpenseAdded={handleExpenseAdded} />

      {/* Recent Expenses Section */}
      <View style={styles.expensesContainer}>
        <Text style={styles.sectionTitle}>Recent Expenses</Text>
        {expenses.map((expense) => (
          <View key={expense.id} style={styles.expenseRow}>
            <Text>{expense.title}</Text>
            <Text>{expense.date}</Text>
            <Text>{expense.group || 'No group'}</Text>
            <Text>₹{expense.amount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor:'#000', paddingHorizontal:'20px', color:'#fff'},
});

export default Dashboard;
