/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Entertainment from '../Entertainment/Entertainment';
import Sports from '../Sports/Sports';
import Technology from '../Technology/Technology';
import Health from '../Health/Health';

const topTabNavigator = createMaterialTopTabNavigator({

    Entertain:{
        screen: Entertainment,
    },
    Sports:{
        screen: Sports,
    },
    Technology:{
       screen: Technology,
    },
    Health:{
      screen: Health,
    },
},{
    tabBarOptions:{
        activeTintColor:'red',
        inactiveTintColor:'white',
        style:{
            backgroundColor:'black',
        },
    },
});

export default createAppContainer(topTabNavigator);