// Дозволяє асинзранно очікувати юзера
import {Alert} from "react-native";

interface IButtons {
    text: string
    resolveValue: string
    textSecond: string
    resolveValueSecond: string
}

interface IAsyncAlert {
    title: string
    msg?: string
    buttons: IButtons
}

export const asyncAlert = ({title, msg, buttons}: IAsyncAlert) => new Promise(resolve => {
    Alert.alert(title, msg, [{
        text: buttons.text, onPress: () => {
            resolve(buttons.resolveValue)
        }
    }, {
        text: buttons.textSecond, onPress: () => {
            resolve(buttons.resolveValueSecond)
        }
    },
    ], {cancelable: false})
})