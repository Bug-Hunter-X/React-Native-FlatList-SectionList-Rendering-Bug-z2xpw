// bugSolution.js
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const BugSolution = () => {
  const [data, setData] = useState(DATA);

  useEffect(() => {
    // Simulate asynchronous data update
    setTimeout(() => {
      setData([...data, { id: 101, title: 'New Item' }]);
    }, 3000);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default BugSolution;