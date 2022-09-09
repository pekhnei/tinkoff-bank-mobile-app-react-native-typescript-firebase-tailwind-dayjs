import React, {FC} from 'react';
import {IService} from "../types";
import {Text, View} from "react-native";
import {useTailwind} from "tailwind-rn";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "@expo/vector-icons";
import Percent from './Percent.';
import {getRandomGradient} from './getRandomGradient';

const ServiceItem: FC<{ service: IService }> = ({service}) => {
    const tw = useTailwind()

    return (
        <View style={tw('mb-4')}>
            <View style={tw('rounded-xl overflow-hidden w-14 h-14 mx-4')}>
                <LinearGradient colors={getRandomGradient()}
                                style={tw('w-full h-full items-center justify-center')}>
                    <Percent percent={service.percent}/>
                    <MaterialIcons name={service.iconName} size={30} color='#fff'/>
                </LinearGradient>
            </View>
            <Text style={{...tw('text-xs text-center'), marginTop: 6}}></Text>
        </View>
    );
};

export default ServiceItem;
