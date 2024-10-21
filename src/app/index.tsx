import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Home(){
  return(
    <View style={styles.container}>
      <Text>Pagina Home</Text>
      <Link href={'/profile'} >Ir para a tela Profile</Link>
      <Link href={'/user'} >Ir para a tela User</Link>
      <Link href={'/dashboard'} >Ir para a tela Dash</Link>
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