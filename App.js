import 'react-native-gesture-handler'; 
import React from 'react'
import { View , Easing} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator , 
  TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';




import IndexPage from './pages/Index/IndexPage'
import SignUp from './pages/Auth/SIgn-up/SignUp';


const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const closeConfig = {
  animation: 'timing',
  duration: 500,
  easing: Easing.linear
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          getstureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          // transitionSpec: {
          //   open: config,
          //   close: closeConfig
          // }
        }}
        
      >
        <Stack.Screen name="Index" component={IndexPage} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App