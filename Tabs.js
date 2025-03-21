import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native-web';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        onPress={() => setActiveTab('expenses')}
        style={[styles.tabButton, activeTab === 'expenses' && styles.activeTab]}
      >
        <Text style={styles.tabText}>Recent Expenses</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab('groups')}
        style={[styles.tabButton, activeTab === 'groups' && styles.activeTab]}
      >
        <Text style={styles.tabText}>Your Groups</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#444',
  },
  tabText: {
    color: '#fff',
  },
});

export default Tabs;
