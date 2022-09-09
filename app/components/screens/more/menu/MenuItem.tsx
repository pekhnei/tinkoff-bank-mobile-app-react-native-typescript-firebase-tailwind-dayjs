import React, {FC} from 'react';
import {Linking, Pressable, Text, View} from "react-native";
import {IMoreItem} from "./types";
import {useTailwind} from "tailwind-rn";
import {BOX_SHADOW} from "../../../../styles";
import {MaterialIcons} from "@expo/vector-icons";

const MenuItem: FC<{ item: IMoreItem }> = ({item}) => {
    const tw = useTailwind()

    return (
        <Pressable style={{...tw('mt-4 flex-row bg-white p-4 rounded-2xl justify-between'), ...BOX_SHADOW}}
                   onPress={() => Linking.openURL(item.link)}>
            <View style={tw('w-10/12')}>
                <Text style={tw('text-xl text-gray-800 font-bold')}>{item.title}</Text>
                <Text style={{...tw('text-xl text-gray-800 font-bold'), fontSize: 13}}>{item.description}</Text>
            </View>
            <View style={tw('rounded-full bg-blue-500 w-9 h-9 items-center justify-center')}>
                <MaterialIcons name={item.iconName} size={22} color='#EDF4FE'/>
            </View>
        </Pressable>
    );
};

export default MenuItem;
