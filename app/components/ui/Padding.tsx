import React, {FC} from 'react';
import {useTailwind} from "tailwind-rn";

interface Props {
    children?: React.ReactNode;
    style?: any
}

const Padding: FC<Props> = ({children, style = {}}) => {
    const tw = useTailwind()
    return <Padding style={{...tw('px-4'), ...style}}>{children}</Padding>

};

export default Padding;
