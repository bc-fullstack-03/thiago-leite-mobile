import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import AuthForm from '../../components/AuthForm';
import { styles } from './styles';
function SignUp({ navigation }) {
    return (
        <>
            <AuthForm 
                authFormSubTitle='Registre-se e comece a usar!'
                submitFormButtonText='Registrar'
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Login")
                }}
            >
                <Text style={styles.link}>
                    Já possui cadastro? Acesse!
                </Text>
            </TouchableOpacity>

        </>
    );
}

export default SignUp;