import { View, Text, Button } from 'react-native';
function SignUp({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Logando</Text>
            <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
        </View>
    );
}

export default SignUp;