import React, {FC} from 'react';
import {ScrollView, View} from "react-native";
import SubHeading from "../../../ui/SubHeading";
import {useTailwind} from "tailwind-rn";
import OtherItem from "./item/OtherItem";
import {otherItems} from './data';

const Other: FC = () => {
    const tw = useTailwind()
    return (
        <View>
            <SubHeading text='Important transfers'/>
            <ScrollView style={tw('py-5')} showsHorizontalScrollIndicator={false} horizontal>
                {otherItems.map(item => <OtherItem item={item} key={item.title}/>)}
            </ScrollView>
        </View>
    );
};

export default Other;
