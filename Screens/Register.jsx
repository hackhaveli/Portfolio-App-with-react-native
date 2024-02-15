import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import SafeAreaViewAndroid from '../Components/SafeAreaViewAndroid';

const Main = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  
  return (
    <View>
      <Text variant="displaySmall" style={{ textAlign: 'center', marginTop: 10, color: '#3f3f3f' }}>Register</Text>
      <TextInput
        placeholder='Email'
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
      />
      <TextInput
        placeholder='Confirm Password'
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.checkboxText}>Please Accept all terms & condition</Text>
      </View>
      <Button style={{ marginVertical: 33, marginHorizontal: 60 }} mode="contained" onPress={() => navigation.navigate('Home')}>
        Press me
      </Button>
    </View>
  );
};

const Register = ({ navigation }) => {
  return (
    <SafeAreaViewAndroid Component={Main} navigation={navigation}>
      <View style={styles.container}></View>
    </SafeAreaViewAndroid>
  );
};

export default Register;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'wheat',
    marginHorizontal: 60,
    marginVertical: 10,
    marginTop: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 60,
  },
  checkboxText: {
    marginLeft: 10,
  },
});
