import {createHomeStyles} from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import {LinearGradient } from 'expo-linear-gradient'

import { Text, View } from 'react-native'
import React from 'react'      
import { Ionicons } from '@expo/vector-icons'


const Header =() => {

    const { colors } = useTheme();

    const homeStyles = createHomeStyles(colors);
     
    const todo = useQuery(api.todo.getTodos);

    const todoCompletos = todo ? todo.filter((todo) => todo.isCompleted).length : 0;

    const todoTotal = todo ? todo.length : 0; 

    const barraDeProgresso = todoTotal > 0 ? (todoCompletos / todoTotal) * 100 : 0;

    return (
        <View style={homeStyles.header}>
            <View style= {homeStyles.titleContainer}>
                <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
                <Ionicons name='calendar' size = {30} color = {"#fff"}/>
                </LinearGradient>
            </View>
        </View>
    )
}


export default Header