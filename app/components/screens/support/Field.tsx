import React, {useState} from 'react';
import {useAuth} from "../../../hooks/useAuth";
import {Alert, Pressable, TextInput, View} from "react-native";
import {useTailwind} from "tailwind-rn";
import {addDoc, collection} from "@firebase/firestore";
import {serverTimestamp} from "firebase/firestore";
import {db} from "../../../firebase";
// ?
import {MaterialCommunityIcons} from '@expo/vector-icons/'

const Field = () => {
    const {user} = useAuth()
    const [message, setMessage] = useState('');
    const tw = useTailwind()

    const handleSendMessage = async () => {
        try {
            await addDoc(collection(db, 'messages'), {
                timestamp: serverTimestamp(),
                userId: user?.uid,
                text: message
            })
        } catch (error: any) {
            Alert.alert('Err add new msg', error)
        } finally {
            setMessage('')
        }
    }

    return (
        <View style={tw('mt-3 flex-row items-center justify-between py-1')}>
            <TextInput
                placeholder='Enter your message'
                onChangeText={setMessage}
                value={message}
                showSoftInputOnFocus={false}
                autoCapitalize='none'
                style={tw('bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl')}
            />
            <Pressable onPress={handleSendMessage}>
                <MaterialCommunityIcons name='send-circle-outline' size={42} style={tw('text-blue-300')}/>
            </Pressable>
        </View>
    );
};

export default Field;
