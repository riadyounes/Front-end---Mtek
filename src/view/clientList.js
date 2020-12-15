import React, { } from 'react';
import {
    Alert,
    FlatList,
    View
} from 'react-native';
import { Button, Icon, ListItem } from 'react-native-elements';
import clients from '../data/client';

export default props => {

    function confirmClientDeletion(client) {
        
        Alert.alert('Excluir Cliente', 'Deseja excluir o cliente?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete ' + client.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }


    function getActions(client) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('CadastroCliente', client)}
                    type="clear"
                    icon={<Icon name="edit" size={22} color="orange" />}
                />
                <Button
                    onPress={() => confirmClientDeletion(client) }
                    type="clear"
                    icon={<Icon name="delete" size={22} color="red" />}
                />
            </>
        )
    } 

    function getClientItem({ item: client }) {
        return (
            <ListItem
                key={client.id}
                title={client.name}
                subtitle={client.email}
                bottomDivider
                rightElement={getActions(client)}
                onPress={() => props.navigation.navigate('CadastroCliente')}
            />
        )
    }
    
    return (
        <View>
            <FlatList
                keyExtractor={client => client.id.toString()}
                data={clients}
                renderItem={getClientItem}
            />
        </View>

    );
};


