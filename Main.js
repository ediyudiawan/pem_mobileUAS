import React from 'react';
import { View, Text,Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home.js';
import Category from './Category.js';
import AddCategory from './AddCategory.js';
import About from './About.js';
import Objek from './Objek.js';
import Detail from './Detail.js';
import Update from './Update.js';
import Delete from './Delete.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Form from './Form.js';
import Logo from './Logo.js';
import Upload from './Upload.js';


        const AppNavigator = createStackNavigator(
        {
            Home: Home,
            Category: Category,
            AddCategory: AddCategory,
            About: About,
            Objek: Objek,
            Detail: Detail,
            Update: Update,
            Delete: Delete,
            Login: Login,
            Signup: Signup,
            Form: Form,
            Logo: Logo,
            Upload: Upload,
        },
        {
            initialRouteName: "Login"
        }
        );
export default createAppContainer(AppNavigator);
