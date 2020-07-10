import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1576933Navigator from '../features/BlankScreen1576933/navigator';
import BlankScreen1575870Navigator from '../features/BlankScreen1575870/navigator';
import Settings75856Navigator from '../features/Settings75856/navigator';
import UserProfile75849Navigator from '../features/UserProfile75849/navigator';
import Settings75848Navigator from '../features/Settings75848/navigator';
import Settings75846Navigator from '../features/Settings75846/navigator';
import SignIn275844Navigator from '../features/SignIn275844/navigator';
import BlankScreen271839Navigator from '../features/BlankScreen271839/navigator';
import BlankScreen371838Navigator from '../features/BlankScreen371838/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen1576933: { screen: BlankScreen1576933Navigator },
BlankScreen1575870: { screen: BlankScreen1575870Navigator },
Settings75856: { screen: Settings75856Navigator },
UserProfile75849: { screen: UserProfile75849Navigator },
Settings75848: { screen: Settings75848Navigator },
Settings75846: { screen: Settings75846Navigator },
SignIn275844: { screen: SignIn275844Navigator },
BlankScreen271839: { screen: BlankScreen271839Navigator },
BlankScreen371838: { screen: BlankScreen371838Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
