import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import { Card, Button } from 'react-native-elements';

import Deck from './components/Deck';

const DATA = [
    { id: 1, text: 'Card #1', uri: 'https://www.destructoid.com/wp-content/uploads/2021/09/Lost-in-Random-Shadowman-screenshot.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class SwipeScreen extends React.Component<any, any> {
    renderCard(item: any) {
        return (
            <Card
                key={item.id}
                title={item.text}
                image={{uri: item.uri}}
            >
                <Text style={{marginBottom: 10}}>
                    I Can  customise the card further
                </Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor="#03A9F4"
                    title="View Now!"
                />
            </Card>
        );
    };

    render () {
        return (
            <View style={styles.screen}>
                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default SwipeScreen;