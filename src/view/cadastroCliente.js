import React, { useState } from 'react';
import {
    TextInput,
    View,
    Text,
    Button
} from 'react-native';


export default ({route, navigation}) => {
    const [client, setClient] = useState(route.params ? route.params : {})
    return (
        <View>
            <Text>Nome</Text>
            <TextInput onChangeText={name => setClient({ ...client, name })}
                placeholder="Digite o nome"
                value={client.name}
            />
            <Text>Email</Text>
            <TextInput onChangeText={email => setClient({ ...client, email })}
                placeholder="Digite o email"
                value={client.email}
            />
            <Text>CPF</Text>
            <TextInput onChangeText={cpf => setClient({ ...client, cpf })}
                placeholder="Digite o cpf"
                value={client.cpf}
            />
            <Button 
            title="Salvar"
            onPress={() => {
                navigation.goBack()
            }}/>
        
        </View>

    );

}

