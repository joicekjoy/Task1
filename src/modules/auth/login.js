import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomText from '../../components/CustomText';
import {useDispatch} from 'react-redux';
import {getOrderList} from './action';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data,setData]=useState({})

  const dispatch = useDispatch();

  const submit = () => {
        dispatch(getOrderList(30))
        props.navigation.navigate("Orders")
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textcon}>
        <CustomText
          title="Email Address"
          onChangeText={text => setEmail(text)}
          value={email}
          onSubmitEditing={() => passwordref.current.focus()}
        />
        <CustomText
          title="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          onSubmitEditing={submit}
        />
        <TouchableOpacity style={styles.btn} onPress={submit}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textcon: {
    flex: 0.5,
    paddingHorizontal: 20,
  },
  btn: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'teal',
    borderRadius: 20,
    marginTop: 20,
  },
  btntext: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Light',
  },
});
