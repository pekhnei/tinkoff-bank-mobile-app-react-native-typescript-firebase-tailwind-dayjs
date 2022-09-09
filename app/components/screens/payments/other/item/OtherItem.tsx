import React, {FC} from 'react';
import {IOtherItem} from "../types";
import {Pressable, Text} from "react-native";
import Icon from "./Icon";
import {useTailwind} from "tailwind-rn";
import {BOX_SHADOW} from '../../../../../styles';
import {handleTransfer} from "../handleTransfer";
import {useAccounts} from "../../../home/accounts/useAccount";

// ???
const CASH_CARD_NUMBER = '4917 2154 8691 5737'

const OtherItem: FC<{ item: IOtherItem }> = ({item}) => {
    const tw = useTailwind()
    const {accounts} = useAccounts()

    return (
        <Pressable style={{...tw('ml-4 rounded-xl p-2 w-24 h-24 bg-white'), ...BOX_SHADOW}}
                   onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}>
            <Icon iconName={item.iconName}/>
            <Text style={{...tw('text-xs'), marginTop: 6}}>{item.title}</Text>
        </Pressable>
    );
};

export default OtherItem;
