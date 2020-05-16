import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {//the props will take care of the dishes

    const renderMenuItem = ({item, index}) => {

        return (
                <ListItem//these are the required items in case of ListItem and acts as a iterator
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/'+item.name.toLowerCase()+".png")}}
                  />
        );
    };

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}//this will take data as item and keyExtractor as index 
                keyExtractor={item => item.id.toString()}
                />
    );
}


export default Menu;