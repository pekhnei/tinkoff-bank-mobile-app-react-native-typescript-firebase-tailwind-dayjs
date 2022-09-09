import React, {FC} from 'react';
import {IContact} from "./types";
import {Pressable, Text} from "react-native";
import {useTailwind} from "tailwind-rn";
import Avatar from "../../../ui/Avatar";
import {handleTransfer} from '../other/handleTransfer';
import {useAccounts} from "../../home/accounts/useAccount";

const ContactItem: FC<{ contact: IContact }> = ({contact}) => {
    const tw = useTailwind()
    const {accounts} = useAccounts()

    return (
        <Pressable style={tw('ml-4 mr-1 items-center')}
                   onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}>
            <Avatar name={contact.displayName} size='large'/>
            <Text style={tw('mt-1 text-xs')}>{contact.displayName}</Text>
        </Pressable>
    );
};

export default ContactItem;
