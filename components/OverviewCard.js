import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

const OverviewCard = ({ title, value, description }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#222',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#ccc',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default OverviewCard;
