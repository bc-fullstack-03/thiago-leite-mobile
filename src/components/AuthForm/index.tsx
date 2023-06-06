import { Image, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
import logo from '../../../assets/logo.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { EnvelopeSimple, Lock } from 'phosphor-react-native';
import { THEME } from '../../theme';
import { Spacer } from '../../components/Spacer';
import { Button } from '../../components/Button';

import { styles } from './styles';

interface AutFormProps {
    authFormSubTitle: string;
    submitFormButtonText: string;
    // screenName: string;
    // submitFormButtonAction: (auth: Auth) => void;
}

function AuthForm(props: AutFormProps) {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            contentContainerStyle={styles.containerPosition}
            behavior={Platform.OS === 'ios' ? "padding" : "position"}
        >
            <Image source={logo} resizeMethod="scale" />
            <Heading title="Sysmap Parrot" subtitle={props.authFormSubTitle} />

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
            <Button title={props.submitFormButtonText} onPress={() => { }} />
            {/* <Spacer /> */}
        </KeyboardAvoidingView>
    );
}

export default AuthForm;