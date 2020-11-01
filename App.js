import React, { useState } from "react";
import {StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {name: 'shaun', key: '1'},
    {name: 'John', key: '2'},
    {name: 'Sam', key: '3'},
    {name: 'Mario', key: '4'},
    {name: 'Fury', key: '5'},
    {name: 'Hulk', key: '6'},
    {name: 'Thor', key: '7'},
  ]);

  return (
    <View style={styles.container}>
    <ScrollView>
     {people.map( item=>{
       return(
         <View key={item.key}>
           <Text style={styles.item}>
             {item.name}
          </Text>
         </View>
       )
     }
     )}
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
