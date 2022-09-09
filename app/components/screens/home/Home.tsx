import React, {FC} from "react";
import Layout from "../../layout/Layout";
import Accounts from './accounts/Accounts'
import Header from "./Header";
import Stories from "./stories/Stories";
import ApplyNewProduct from "./accounts/apply-new-products/ApplyNewProduct";

const Home: FC = () => {
    return (
        <Layout>
            <Header/>
            <Stories/>
            <Accounts/>
            <ApplyNewProduct/>
        </Layout>
    )
}

export default Home