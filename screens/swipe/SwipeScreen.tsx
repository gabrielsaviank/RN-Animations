import React from 'react';
import {
    View,
    StyleSheet,
} from "react-native";

import Ball from './components/Ball'

const SwipeScreen = () => {
    return (
        <View style={styles.screen}>
            <Ball/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default SwipeScreen;