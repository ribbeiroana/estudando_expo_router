import { Stack, Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerStyle: {
        backgroundColor: '#121212',
      },
      headerTintColor: '#fff',
    }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => {

            if (focused) {
              return <FontAwesome name='tags' color={color} size={size} />
            }
            return <FontAwesome name='tags' color={color} size={size} />

          }
        }}
      />

      <Tabs.Screen name='profile' options={{ title: 'Perfil',
        tabBarIcon: ({ focused, color, size }) => {

          if (focused) {
            return <FontAwesome name='tags' color={color} size={size} />
          }
          return <FontAwesome name='tags' color={color} size={size} />

        }
       }} />
       

      <Tabs.Screen name='user/index' options={{ title: 'Usuário',
        tabBarIcon: ({ focused, color, size }) => {

          if (focused) {
            return <FontAwesome name='tags' color={color} size={size} />
          }
          return <FontAwesome name='tags' color={color} size={size} />

        }
       }} />

       
      <Tabs.Screen name='(tabs)' options={{ title: 'Usuário',
        tabBarIcon: ({ focused, color, size }) => {

          if (focused) {
            return <FontAwesome name='tags' color={color} size={size} />
          }
          return <FontAwesome name='tags' color={color} size={size} />
        }
       }} />
    </Tabs>
  )
}
// name='index' nome do arquivo