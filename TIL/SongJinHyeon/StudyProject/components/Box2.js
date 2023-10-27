import React from "react";
import {View, StyleSheet} from 'react-native';

const Box2 = ({rounded, size, color}) => {
    return (
        <View
            style={[
                styles.box,
                rounded && styles.rounded,
                sizes[size],
                {
                    backgroundColor: color,
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    box:{
        backgroundColor: 'black',
    },
    rounded: {
        borderRadius: 16,
    },
    small: {
        width: 32,
        height: 32,
    },
    medium: {
        width: 64,
        height: 64,
    },
    large: {
        width: 128,
        height: 128,
    }
});

const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
};

Box2.defaultProps = {
    rounded: false,
    size: 'medium',
    color: 'blue',
};

export default Box2;