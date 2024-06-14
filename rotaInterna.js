import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import HomeVimeo from './HomeVimeo';
import HomeYoutube from './HomeYoutube';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeVimeo"
                component={HomeVimeo}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons name="logo-youtube" size={24} color="red" />)
                        }
                        return (<Ionicons name="logo-youtube" size={24} color="black" />)
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="HomeYoutube"
                component={HomeYoutube}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons name="logo-vimeo" size={24} color="blue" />)
                        }
                        return (<Ionicons name="logo-vimeo" size={24} color="black" />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}