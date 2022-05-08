import React from 'react'
import { ImageBackground, Image,  View, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'
import { Colors } from '../../assets/colors'
import Button from '../../components/Buttons/btn_1'
import { BackgroundImage, ComplxLogo } from '../../utils/images'


const IndexPage = () => {
    return (
            <ImageBackground
                style={styles.container}
                source={BackgroundImage}
                resizeMode='cover'
            >
                <Image 
                    style={styles.complxLogo}
                    source={ComplxLogo}
                />
               <Button chilren="CONTINUE" to='Sign Up' />
            </ImageBackground>
      
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40

    },
    complxLogo: {
        width: 180,
        height: 70
    }
})

export default IndexPage