import React, { Fragment, useState } from 'react';
import {
    Image,
    TextInput,
    Button,
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import efetuarLogin from '../api/login';



const Login = ({ navigation }) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");


    const tentarLogar = async () => {
        try {
            const token = await efetuarLogin(usuario, senha);
            await AsyncStorage.setItem("KEY-token", token);
            navigation.navigate('Menu')

        } catch (erro) {
            setMensagemErro(erro)
        }

    }
    return (
        <Fragment>
            <View style={estilo.versionContent}>
                <Text style={estilo.version}>V1.0</Text>
            </View>
            <View style={estilo.conteiner}>

                <Image
                    style={estilo.logo}
                    source={require("../../res/img/Logo-CERTA.png")} />
                <View style={estilo.loginInputStyle}>
                    <Image
                        style={estilo.icon}
                        source={require("../../res/img/user-profile.png")}
                    />
                    <TextInput
                        style={estilo.inputs}
                        placeholder="Usuário"
                        underlineColorAndroid="transparent"
                        onChangeText={texto => setUsuario(texto)} />
                </View>
                <View style={estilo.loginInputStyle}>
                    <Image
                        style={estilo.icon}
                        source={require("../../res/img/Logo-CERTA.png")}
                    />
                    <TextInput
                        style={estilo.inputs}
                        placeholder="Senha"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        onChangeText={texto => setSenha(texto)}
                    />
                </View>
                <Text>{mensagemErro}</Text>
            </View>
            <View style={estilo.botaoView}>
                <Button title="Entrar" onPress={tentarLogar} />
            </View>
        </Fragment>
    );

};


const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    
    versionContent: {
        display: "flex",
        alignItems: "flex-end"

    },
    conteiner: {
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    inputs: {
        width: largura * 0.6,
        alignSelf: "flex-start"
    },
    botaoView: {
        alignItems: "center",
        marginBottom: 50,
    },
    logo: {
        marginBottom: 100,
        width: 165,
        height: 150
    },
    icon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    loginInputStyle: {
        display: "flex",
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
    }
})

export default Login;