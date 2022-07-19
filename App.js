import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);


  function addGoalHandleer(enteredGoalText) {
    setGoals(currentGoals => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  function removeGoalHandler(id) {
    setGoals(oldStates=>{
      return oldStates.filter((x)=> x.id !== id)
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandleer}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(data, index) => {
            return data.id
          }}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={removeGoalHandler}
              />
            );
          }} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50
  },
  goalsContainer: {
    flex: 5
  },


});
