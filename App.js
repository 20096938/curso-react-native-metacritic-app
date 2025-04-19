import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
     
      <TouchableHighlight
      underlayColor={"#o9f"}
      onPress={() => alert('presionastes el boton')}
      style={{ width: 200, height: 200, backgroundColor: 'red', }}
      >
        <Text style={{ color: 'white' }}>soy un pinche boton</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
