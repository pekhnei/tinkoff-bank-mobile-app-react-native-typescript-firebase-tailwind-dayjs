import React, {FC} from 'react';
import {Pressable, Text} from "react-native";
import {useTailwind} from "tailwind-rn";
import {AntDesign} from "@expo/vector-icons";

import {IFooterItem} from "./types";
import {TypeRootStackParamList} from '../../../navigation/types';

interface INavItem {
    item: IFooterItem
    navigate: (screenName: keyof TypeRootStackParamList) => void
    currentRoute: string
}

const NavItem: FC<INavItem> = ({item, navigate, currentRoute}) => {
    const tw = useTailwind()
    const isActive = currentRoute === item.title

    return (
        <Pressable style={{...tw('items-center'), width: '20%'}} onPress={() => navigate(item.title)}>
            <AntDesign name={item.iconName} style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500-'}`)}/>
            <Text style={{...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`), marginTop: 1}}></Text>
        </Pressable>
    );
};

export default NavItem;
