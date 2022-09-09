import React, {FC} from 'react';
import Padding from "./Padding";
import {Text} from "react-native";
import {useTailwind} from "tailwind-rn";

const Heading: FC<{ text: string, isCenter?: boolean }> = ({text, isCenter = false}) => {
    const tw = useTailwind()
    return (
        <Padding>
            <Text style={tw(`text-2xl font-bold text-gray-800 ${isCenter ? 'text-center' : ''}`)}>{text}</Text>
        </Padding>
    );
};

export default Heading;
