import { View, TouchableOpacity, Text } from 'react-native';
import AuthForm from '../../components/AuthForm';

import { styles } from './styles';

function Login({ navigation }) {
    return (
        <>
            <AuthForm
                authFormSubTitle='Faça login e comece a usar!'
                submitFormButtonText='Entrar'
                
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("SignUp")
                }}
            >
                <Text style={styles.link}>
                    Não possui conta? crie agora!
                </Text>
            </TouchableOpacity>

        </>
    );
}

export default Login;