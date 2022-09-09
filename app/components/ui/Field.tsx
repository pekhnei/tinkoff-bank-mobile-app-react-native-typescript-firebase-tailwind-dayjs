import React, {FC} from 'react';
import {TextInput} from "react-native";
import {useTailwind} from "tailwind-rn";

interface IField {
    onChange: (val: string) => void
    val: string
    placeholder: string
    isSecure?: boolean
}

const Field: FC<IField> = ({onChange, placeholder, val, isSecure}) => {
    const tw = useTailwind()
    return (
        <TextInput showSoftInputOnFocus={false} autoCapitalize='none' placeholder={placeholder} onChangeText={onChange}
                   value={val}
                   secureTextEntry={isSecure}
                   style={tw('rounded-xl bg-gray-100 mt-3 p-3 w-full')}/>
    )
}

export default Field;