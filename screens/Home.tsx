import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

const Home = ({ navigation }: {navigation: any}) => {
    return (
        <View style={styles.screen}>
            <Text style={{fontSize: 25, textAlign: 'center'}}>React Reanimated</Text>
            <Button title="Swipe" onPress={() => navigation.navigate('Swipe')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 60
    },
});

export default Home;