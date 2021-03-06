import { AppRegistry } from 'react-native';
import App from "./src/screens/App";
import ChooseInfoStep from "./src/components/CreateDealIndicator/ChooseInfoStep";
import ChooseAddressStep from "./src/components/CreateDealIndicator/ChooseAddressStep";
import CreateDealIndicator from "./src/components/CreateDealIndicator/CreateDealIndicator";


import { YellowBox } from 'react-native';
import Profile from "./src/screens/LoginProfile";
import RelatedDealsListView from "./src/components/RelatedDealsListView/RelatedDealsListView";
import Test from "./src/screens/Test";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('FIFAonLife', () => App);
