import React, {FC} from 'react';
import {useTailwind} from "tailwind-rn";

import Padding from "../../ui/Padding";
import {menu} from "./menu";
import NavItem from './NavItem';
import {TypeRootStackParamList} from "../../../navigation/types";

interface IFooter {
    navigate: (screenName: keyof TypeRootStackParamList) => void
    currentRoute: string
}

const Footer: FC<IFooter> = ({navigate, currentRoute}) => {
    const tw = useTailwind()

    return (
        <Padding style={{
            ...tw('flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2'),
            borderTopColor: '#E1E1E1',
            borderTopWidth: 1,
        }}>
            {menu.map(item => (
                <NavItem key={item.title} item={item} navigate={navigate} currentRoute={currentRoute}/>
            ))}
        </Padding>
    );
};

export default Footer;
