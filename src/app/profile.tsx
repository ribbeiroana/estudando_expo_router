import { StyleSheet, Text, View } from 'react-native';

export default function Profile(){
  return(
    <View style={styles.container}>
      <Text>Pagina Profile</Text>
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