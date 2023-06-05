import { View, Image, Text, Button } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Heading } from '../../components/Heading';

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={logo}  resizeMethod="scale" />
            <Heading title="Sysmap Parrot" subtitle="Faça login e comece a usar!" />
        </View>
    );
}

export default Login;