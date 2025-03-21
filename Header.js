import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native-web';

const Header = ({ email }) => {
  return (
    <View style={styles.header}>
      {/* Logo Section */}
      <Text style={styles.logo}>SplitKaro</Text>

      {/* User Info and Buttons */}
      <View style={styles.userSection}>
        {/* User Email */}
        <Text style={styles.email}>{email}</Text>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Add Expense Button */}
      <TouchableOpacity style={styles.addExpenseButton}>
        <Text style={styles.addExpenseText}>+ Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    color: '#fff',
    marginRight: 15,
    fontSize: 14,
  },
  logoutButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 14,
  },
  addExpenseButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    position: 'absolute',
    right: 20, // Align with the right side
  },
  addExpenseText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Header;
