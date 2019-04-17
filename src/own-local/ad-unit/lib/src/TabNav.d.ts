import { TranslateFunction } from '@own-local/ad-utils/lib/types';
import { Tab } from './AdUnit';
export interface TabNavProps {
    tab: Tab;
    onClick: (tab: Tab) => () => void;
    activeTab: Tab;
    locale: string;
    translateString: TranslateFunction;
}
declare const TabNav: (props: TabNavProps) => JSX.Element;
export default TabNav;
