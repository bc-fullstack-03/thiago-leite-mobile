import { View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { EnvelopeSimple, Lock } from 'phosphor-react-native';
import { THEME } from '../../theme';
import { Spacer } from '../../components/Spacer';
import { Button } from '../../components/Button';

function Login({ navigation }) {
    return (
        <KeyboardAvoidingView 
        style={styles.container}
        contentContainerStyle={styles.containerPosition}
        behavior={Platform.OS === 'ios' ? "padding" : "position"}
        >
            <Image source={logo} resizeMethod="scale" />
            <Heading title="Sysmap Parrot" subtitle="Faça login e comece a usar!" />

            <Input.Root>
                <Input.Icon>
                    <EnvelopeSimple color={THEME.COLORS.INPUT} />
                    <Input.Input
                        placeholder="Digite seu e-mail"
                        autoCapitalize="none"
                    />
                </Input.Icon>
            </Input.Root>
            <Spacer />
            <Input.Root>
                <Input.Icon>
                    <Lock color={THEME.COLORS.INPUT} />
                    <Input.Input
                        placeholder="******"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                    />
                </Input.Icon>
            </Input.Root>
            <Spacer />
            <Button title='Entrar' onPress={() => {}} />

        </KeyboardAvoidingView>
    );
}

export default Login;