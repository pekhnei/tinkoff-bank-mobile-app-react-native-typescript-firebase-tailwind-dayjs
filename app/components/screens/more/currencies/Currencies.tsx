import React, {FC} from 'react';
import {Text, View} from "react-native";
import {useCurrencies} from "./useCurrencies";
import {useTailwind} from "tailwind-rn";
import {BOX_SHADOW} from '../../../../styles';
import Loader from "../../../ui/Loader";

const Currencies: FC = () => {
    const {currencies, isLoading} = useCurrencies()
    const tw = useTailwind()

    return (
        <View style={{...tw('mt-5 flex-row rounded-2xl bg-white py-3 justify-center'), ...BOX_SHADOW}}>
            {isLoading ? <Loader/> : currencies.map(cur => (
                <View key={cur.name} style={{...tw('text-xs w-1/3 flex-row justify-center'), ...BOX_SHADOW}}>
                    <Text style={tw('text-gray-400 mr-1')}>{cur.name}</Text>
                    <Text style={tw('text-gray-800')}>{cur.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default Currencies;
