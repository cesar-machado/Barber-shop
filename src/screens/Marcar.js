import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Marcar() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <Text></Text>
      <View >
      <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={showDatepicker}
        >
          <Text style={styles.loginText}>Selecione o Dia</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={showTimepicker}
        >
          <Text style={styles.loginText}>Selecione o Horário</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={Date.now()}
        />
      )}
      {/* <View style={styles.btn}>
          <Button  color="#A9BCF5" title="Confirme aqui" onPress={() => Alert.alert('Seu Corte está marcado')} />
      </View> */}
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => Alert.alert("Seu Corte está marcado")}
        underlayColor="#fff"
      >
        <Text style={styles.loginText}>Confirme Aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#814C2A",
  },
  btn: {
    // backgroundColor: "#644444",
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
  },
  button: {
    backgroundColor: "#000",
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E0C00",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
