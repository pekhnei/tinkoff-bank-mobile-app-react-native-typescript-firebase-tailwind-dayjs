import React, {FC} from "react";
import {Text, View} from 'react-native'
import {useTailwind} from "tailwind-rn";

import Layout from "../../layout/Layout";
import {services} from "./data";
import ServiceItem from "./item/ServiceItem";

const Services: FC = () => {
    const tw = useTailwind()

    return (
        <Layout>
            <Text style={tw('text-string text-lg mb-6')}>Moscow</Text>
            <View style={tw('flex-row flex-wrap justify-center')}>
                {services.map(service => <ServiceItem key={service.title} service={service}/>)}
            </View>
        </Layout>
    )
}

export default Services