import * as React from 'react';
import { Layout } from '@own-local/ad-utils/lib/types';
export interface ImagiroProps {
    children: React.ReactNode;
    expanded: boolean;
    shareModalExpanded: boolean;
    stretched: boolean;
    hasLogo: boolean;
    isAgent: boolean;
    tabCount: number;
    tickerCount: number;
    layout?: Layout;
}
declare const Imagiro: React.SFC<ImagiroProps>;
export default Imagiro;
