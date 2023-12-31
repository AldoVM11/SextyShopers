import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Center, Pressable } from "native-base";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../color";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import StackNav from "./StackNav";
import NoticiasScreen from "../Screens/NoticiasScreen";
import HelpScreen from "../Screens/HelpScreen";


const Tab = createMaterialBottomTabNavigator();
const CustomTab = ({ children, onPress }) => ( 
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded='full'
    bg={Colors.main}
    top={-30}
    shadow={2}
  >
    {children}
  </Pressable>
); <Text>hh</Text>

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/* Tabs de abajo */}
      <Tab.Screen
        name="Inicio"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      {/* Cart */}
      <Tab.Screen
        name="Glosario"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <MaterialCommunityIcons
                  name="file-document"
                  size={24}
                  color={Colors.main}
                />
              ) : (
                <MaterialCommunityIcons
                  name="file-document-outline"
                  size={24}
                  color={Colors.black}
                />
              )}
            </Center>
          ),
        }}
      />
      {/* Profile */}
      <Tab.Screen
        name="Quiz"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
       <Tab.Screen
        name="noticias"
        component={NoticiasScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTab
              {...props}
              focused={noticiasFocused}
              onPress={() => {
                props.onPress();
                setNoticiasFocused(true);
              }}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <Center>
              <FontAwesome
                name="newspaper-o"
                size={24}
                color={focused ? Colors.main : Colors.black}
              />
            </Center>
          ),
        }}
      />
            <Tab.Screen
        name="Ayuda"
        component={HelpScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
             
               <FontAwesome
               name="ambulance"
               size={24}
               color={focused ? Colors.main : Colors.black}
             />
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});

export default BottomNav;
