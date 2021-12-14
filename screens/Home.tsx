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
            <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 40}}>React Reanimated</Text>
            <Button title="Swipe" onPress={() => navigation.navigate('Swipe')} color='black'/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 60,
        padding: 10
    },
});

export default Home;
