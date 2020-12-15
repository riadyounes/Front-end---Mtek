
import React from 'react';
import {
    Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const Menu = ({navigation}) => {

    return (
        <ScrollView>
            <Button
                title="Cadastrar cliente"
                onPress={() => navigation.navigate('cadastroCliente')}>
            </Button>
        </ScrollView>
    );
};
import { StyleSheet, Dimensions } from "react-native"

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({ 




    
})


export default Menu;
