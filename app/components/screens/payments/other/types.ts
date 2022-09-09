import {IFooterItem} from "../../../layout/footer/types";

export interface IOtherItem extends Pick<IFooterItem, 'iconName'> {
    title: string
}