import {AntDesign} from '@expo/vector-icons'
import {TypeRootStackParamList} from "../../../navigation/types";

export interface IFooterItem {
    iconName: keyof typeof AntDesign.glyphMap,
    title: keyof TypeRootStackParamList
}