import React, {useState} from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native'
import { ComplxBlueLogo } from '../../../utils/images'
import Button from '../../../components/Buttons/btn_1'
import Logo from '../../../components/Logo/Logo'
import { Colors } from '../../../assets/colors'



const SignUp = () => {
    const [phoneNumber, onChangeNumber] = useState('')
    const [email, onChangeEmail] = useState('')
    return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Logo />
                </View>
                <View style={styles.inner_container}> 
                    <Text style={styles.create_account}>
                        Create {"\n"}Account
                    </Text>

                    <View style={styles.options_container}>
                        <TouchableOpacity style={styles.options}>
                            <Text style={styles.options_text}>
                                Phone
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.options, {
                            backgroundColor: Colors.btn_active
                        }]}>
                            <Text style={[styles.options_text, {
                                color: Colors.btns
                            }]}>
                                Email
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.text_container}>
                        <TextInput
                            onChangeText={onChangeNumber}
                            value={phoneNumber}
                            placeholder="Number"
                            keyboardType="numeric"
                            style={styles.input}
                        />
                        <TextInput
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email"
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Button style={styles.sign_up} chilren='Sign Up'/>  
                        <Text style={styles.trust}>Trust this device for 90 days</Text>
                    </View>
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    
                    
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    inner_container: {
        display: "flex", 
        justifyContent: 'space-around',
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignContent: "space-between",
        padding: 20
    },
    text_container: {
        // marginTop: -150,
    },  
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30
    },  
    create_account: {
        fontSize: 40,
        fontFamily: "JosefinSans-Bold",
        alignSelf: "flex-start",
        // marginTop: -60
    },
    options_container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        width: '100%',
        // marginTop: -100,
        // width: Dimensions.get('screen').width
    },
    options: {
        width: 150,
        height: 73,
        borderRadius: 19,
        backgroundColor: Colors.btns,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    options_text: {
        fontSize: 20,
        fontFamily: 'JosefinSans-Bold',
        color: "#fff"
    },
    input: {
        height: 40,
        margin: 12,
        width: Dimensions.get('window').width - 40,
        borderBottomWidth: 2,
    },
    sign_up: {
        // maginTop: 20
    },
    trust: {
       textAlign: 'center',
       paddingTop: 10,
       fontFamily: "JosefinSans-Bold",
    },
    active_box: {
        
    }
})

export default SignUp