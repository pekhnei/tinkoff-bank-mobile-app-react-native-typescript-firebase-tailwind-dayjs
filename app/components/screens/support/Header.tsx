import React from 'react';
import {Image, Text, View} from "react-native";
import {useTailwind} from "tailwind-rn";

const Header = () => {
    const tw = useTailwind()

    return (
        <View style={tw('flex-row items-center py-1 mb-2-mt-4')}>
            <Image source={require('../../../../assets/icon.png')} style={tw('mr-2 w-11 h-11')}/>
            <View>
                <Text style={tw('text-sm text-gray-800 font-medium')}>Support</Text>
                <Text style={tw('text-xs text-gray-500')}>We are in touch 24/7</Text>
            </View>
        </View>
    );
};

export default Header;
