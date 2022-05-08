import React from 'react'
import { Text, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { Colors } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';


const Button = ({chilren, to}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            onPress={() => navigation.navigate(`${to}`)}
            activeOpacity={0.6}
            style={{
                width: Dimensions.get('screen').width - 30,
                height: 63,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.btns,
                borderRadius: 10,
                // marginTop: -120
            }}
        >
            <Text style={{
                    fontFamily: "JosefinSans-Medium",
                    fontSize: 19,
                    color: "#fff"
                }}
            >
                {chilren}
            </Text>
        </TouchableOpacity>
)}

export default Button