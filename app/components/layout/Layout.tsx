// Layout - Звичайна обертка
import React, {FC} from 'react';
import {ScrollView, View} from "react-native";
import {useTailwind} from 'tailwind-rn';

interface ILayout {
    isScrollView?: boolean
    children: React.ReactNode
}

export const styleCenter = () => {
    const tw = useTailwind()
    return tw('h-full w-full bg-white pt-16')
}

const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
    return (
        <View style={styleCenter()}>
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}
        </View>
    )
}

export default Layout;