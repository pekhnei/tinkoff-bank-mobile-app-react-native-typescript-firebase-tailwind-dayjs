import React, {FC} from "react";
import {Text} from 'react-native'
import Layout from "../../layout/Layout";
import Heading from "../../ui/Heading";
import Padding from "../../ui/Padding";
import {useTailwind} from "tailwind-rn";
import Currencies from "./currencies/Currencies";
import Menu from "./menu/Menu";

const More: FC = () => {
    const tw = useTailwind()

    return (
        <Layout>
            <Heading text='More'/>
            <Padding>
                <Currencies/>
                <Menu/>
                <Text style={tw('text-center text-gray-500 opacity-50 my-4')}>
                    Version 5.20.6
                </Text>
            </Padding>
        </Layout>
    )
}

export default More