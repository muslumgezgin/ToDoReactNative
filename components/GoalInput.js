import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enterText) {
        setEnteredGoalText(enterText);
    }

    function addGoalHandler()
    {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        padding: 8,
        marginRight: 8
    },
})

export default GoalInput;