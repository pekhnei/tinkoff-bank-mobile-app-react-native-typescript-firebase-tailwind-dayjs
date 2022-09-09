import React, {FC} from 'react';
import {IAccount} from "../types";
import {ImageBackground, ImageSourcePropType, Text} from "react-native";
import {useTailwind} from "tailwind-rn";

const ImageCard: FC<{ account: IAccount }> = ({account: {name, cardNumber}}) => {
    const tw = useTailwind()
    const imageBlack: ImageSourcePropType = require('../../../../../../assets/adaptive-icon.png')
    const imageAirlines: ImageSourcePropType = require('../../../../../../assets/adaptive-icon.png')

    return (
        <ImageBackground source={name === 'Tinkoff All Airlines' ? imageAirlines : imageBlack} resizeMode='contain'
                         style={{...tw(''), padding: 4.5}}>
            <Text style={{...tw('text-white font-medium'), fontSize: 11}}>
                {cardNumber.slice(-4)}
            </Text>
        </ImageBackground>
    );
};

export default ImageCard;

