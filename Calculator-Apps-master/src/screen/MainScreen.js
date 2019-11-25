import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { useSelector , useDispatch} from 'react-redux'

import {pressButton , pressEqual , pressReset, pressPlusMin, pressPercentage} from '../redux/actions'
import Row from "../components/Row";
import Button from "../components/Button";

const MainScreen = () =>  {
    const result = useSelector(state => state.calculator.screen)

    const dispatch = useDispatch()
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {result}
          </Text>
          <Row>
            <Button
              text="AC"
              theme="secondary"
              onPress={() => dispatch(pressReset())}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => dispatch(pressPlusMin())}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => dispatch(pressPercentage())}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => dispatch(pressButton('/'))}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => dispatch(pressButton(7))} />
            <Button text="8" onPress={() => dispatch(pressButton(8))} />
            <Button text="9" onPress={() => dispatch(pressButton(9))} />
            <Button
              text="x"
              theme="accent"
              onPress={() => dispatch(pressButton('*'))}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => dispatch(pressButton(4))} />
            <Button text="5" onPress={() => dispatch(pressButton(5))} />
            <Button text="6" onPress={() => dispatch(pressButton(6))} />
            <Button
              text="-"
              theme="accent"
              onPress={() => dispatch(pressButton('-'))}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => dispatch(pressButton(1))} />
            <Button text="2" onPress={() => dispatch(pressButton(2))} />
            <Button text="3" onPress={() => dispatch(pressButton(3))} />
            <Button
              text="+"
              theme="accent"
              onPress={() => dispatch(pressButton('+'))}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => dispatch(pressButton(0))}
            />
            <Button text="." onPress={() => dispatch(pressButton('.'))} />
            <Button
              text="="
              theme="accent"
              onPress={() => dispatch(pressEqual())}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }

export default MainScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#202020",
      justifyContent: "flex-end"
    },
    value: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
    }
  });