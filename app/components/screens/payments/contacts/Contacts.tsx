import React, {FC} from 'react';
import {useTailwind} from "tailwind-rn";
import {ScrollView, View} from "react-native";
import {useContacts} from "./useContacts";
import SubHeading from "../../../ui/SubHeading";
import Loader from "../../../ui/Loader";
import ContactItem from "./ContactItem";

const Contacts: FC = () => {
    const tw = useTailwind()
    const {contacts, isLoading} = useContacts()
    return (
        <View style={tw('my-8')}>
            <SubHeading text={'Phone transfers'}/>
            {isLoading ? <Loader/> :
                <ScrollView style={tw('mt-5')} showsHorizontalScrollIndicator={false} horizontal>
                    {contacts.map(c => <ContactItem contact={c} key={c._id}/>)}
                </ScrollView>}
        </View>
    );
};

export default Contacts;
