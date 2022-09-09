import {MaterialIcons} from '@expo/vector-icons'

export interface IService {
    iconName: keyof typeof MaterialIcons.glyphMap
    title: string
    percent: number
}