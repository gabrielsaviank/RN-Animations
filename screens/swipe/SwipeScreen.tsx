import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import { Card, Button, Image } from 'react-native-elements';

import Deck from './components/Deck';

const DATA = [
    { id: 1, text: 'Card #1', uri: 'https://www.destructoid.com/wp-content/uploads/2021/09/Lost-in-Random-Shadowman-screenshot.jpg' },
    { id: 2, text: 'Card #2', uri: 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg' },
    { id: 3, text: 'Card #3', uri: 'https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo=' },
    { id: 4, text: 'Card #4', uri: 'https://media.istockphoto.com/photos/prize-wheel-picture-id175482570?b=1&k=20&m=175482570&s=170667a&w=0&h=cHDwnCHXxRE5jMtwX-k1Xq4KSrOTJyGIvt91hrOkZqA=' },
    { id: 5, text: 'Card #5', uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85' },
    { id: 6, text: 'Card #6', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1XVNZSUe_WmtLFNzsltXOk-QMu7uaiiWTg&usqp=CAU' },
    { id: 7, text: 'Card #7', uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg' },
    { id: 8, text: 'Card #8', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UMA7UwvVFmMIE7fMY2_Z3sep5UBMpmnroQ&usqp=CAU' },
];

class SwipeScreen extends React.Component<any, any> {
    renderCard(item: any) {
        return (
            <Card
                key={item.id}
            >
                <Card.Title>{item.text}</Card.Title>
                <Image source={{uri: item.uri}} resizeMode="cover" style={{width: 400, height: 200}}/>
                <Text style={{marginBottom: 10}}>
                    I Can  customise the card further
                </Text>
                <Button
                    icon={{name: 'code'}}
                    title="View Now!"
                    buttonStyle={{backgroundColor: "grey"}}
                />
            </Card>
        );
    };

    renderNoMoreCards(){
        return (
            <Card>
                <Card.Title>All Done Lad</Card.Title>
                <Text style={{marginBottom: 10}}>Theres no more content here.</Text>
                <Button
                    buttonStyle={{backgroundColor: '#03a9f4'}}
                    title="Get More"
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
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default SwipeScreen;
