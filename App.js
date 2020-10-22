import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>hello, World</Text>  
      </View>   
      <View style={styles.body}>
        <Text> lorem ipsum doler set amet </Text>
        <Text style={styles.boldText}> lorem ipsum doler<Text> 'Text View'</Text> set amet </Text>
        <Text> lorem ipsum doler set amet </Text>
        <Text> lorem ipsum doler set amet </Text>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  }
});
