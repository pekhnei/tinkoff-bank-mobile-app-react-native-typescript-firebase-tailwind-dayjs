import React, {FC} from "react";
import Layout from "../../layout/Layout";
import Heading from "../../ui/Heading";
import Contacts from "./contacts/Contacts";
import Other from "./other/Other";

const Payments: FC = () => {
    return (
        <Layout>
            <Heading text='Payment'/>
            <Contacts/>
            <Other/>
        </Layout>
    )
}

export default Payments