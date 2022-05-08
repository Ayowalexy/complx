import React from 'react'
import { ComplxBlueLogo } from '../../utils/images'
import { Image, StyleSheet } from 'react-native'


const Logo = () => (
    <Image
        source={ComplxBlueLogo}
        style={styles.logo}
    />
)


const styles = StyleSheet.create({
    complxLogo: {
        width: 180,
        height: 70
    }
})


export default Logo