import { AppRegistry } from 'react-native';
import App from "./src/screens/App";
import ChooseInfoStep from "./src/components/CreateDealIndicator/ChooseInfoStep";
import ChooseAddressStep from "./src/components/CreateDealIndicator/ChooseAddressStep";
import CreateDealIndicator from "./src/components/CreateDealIndicator/CreateDealIndicator";


import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('FIFAonLife', () => App);
