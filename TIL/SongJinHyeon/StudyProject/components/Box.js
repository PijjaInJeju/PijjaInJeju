import React from "react";
import {View, StyleSheet} from 'react-native';

const Box = (props) => {
    return (
        <View
            style={[
                styles.box,
                props.rounded ? styles.rounded : null,
            ]}
        />
    );
};

const styles = StyleSheet.create({
    box:{
        width: 64,
        height: 64,
        backgroundColor: 'black',
    },
    rounded: {
        borderRadius: 16,
    }
});

Box.defaultProps = {
    rounded: false,
};

export default Box;