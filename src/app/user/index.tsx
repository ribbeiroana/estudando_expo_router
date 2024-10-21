import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function User(){
  return(
    <View style={styles.container}>
      <Text>Pagina Usuário</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})