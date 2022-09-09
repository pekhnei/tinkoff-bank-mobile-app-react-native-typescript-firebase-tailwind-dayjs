import React, {FC} from 'react';
import {View} from "react-native";
import {useTailwind} from "tailwind-rn";
import {FontAwesome} from '@expo/vector-icons'

import {TypeCurrency} from "../types";

const Currency: FC<{ currency: TypeCurrency }> = ({currency}) => {
    const tw = useTailwind()
    return (
        <View style={tw('rounded-full bg-blue-500 w-9 h-9 items-center justify-center')}>
            <View style={{...tw('rounded-full w-5 h-5 items-center justify-center'), backgroundColor: '#EDF4FE'}}>
                <FontAwesome color='#488CF9' size={13} name={currency === 'RUB' ? 'ruble' : 'usd'}/>
            </View>
        </View>
    );
};

export default Currency;
