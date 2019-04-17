import * as React from 'react';
import { AdRecord, Layout, TrackFunction, TranslateFunction } from '@own-local/ad-utils/lib/types';
import './unit.scss';
interface AdUnitProps {
    data: AdRecord;
    layout?: Layout;
    track: TrackFunction;
    translateString: TranslateFunction;
}
export declare enum Tab {
    Info = 0,
    About = 1,
    Contact = 2,
    Print = 3
}
interface AdUnitState {
    expanded: boolean;
    shareModalExpanded: boolean;
    stretched: boolean;
    selectedTab: Tab;
    isAgent: boolean;
    tabCount: number;
    showInfoTab: boolean;
    showAboutTab: boolean;
    showContactTab: boolean;
    showPrintTab: boolean;
    adShape: 'horizontal' | 'vertical' | 'square';
}
export default class AdUnit extends React.Component<AdUnitProps, AdUnitState> {
    constructor(props: AdUnitProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: AdUnitProps): {
        isAgent: boolean;
        tabCount: number;
        showInfoTab: boolean;
        showAboutTab: boolean;
        showContactTab: boolean;
        showPrintTab: boolean;
        adShape: any;
    };
    toggleExpandUnit: () => void;
    selectTab: (tab: Tab) => () => void;
    toggleShare: () => void;
    render(): JSX.Element;
}
export {};
