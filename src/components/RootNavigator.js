import { StackNavigator } from 'react-navigation'
import LandingPage from './LandingPage'
import SignUp from './SignUp'
import LogIn from './LogIn'

const RootNavigator = StackNavigator(
  {
    LandingPage: {
      screen: LandingPage
    },
    SignUp: {
      screen: SignUp
    },
    LogIn: {
      screen: LogIn
    }
  },
  {
    headerMode: 'none'
  }
)

export default RootNavigator
