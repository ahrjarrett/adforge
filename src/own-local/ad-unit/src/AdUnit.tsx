import * as React from 'react';

import TrackingKeys from '@own-local/ad-utils/lib/trackingKeys';
import { AdRecord, Layout, TrackFunction, TranslateFunction } from '@own-local/ad-utils/lib/types';

import AboutContent from './AboutContent';
import Background from './Background';
import ContactContent from './ContactContent';
import Header from './Header';
import Imagiro from './Imagiro';
import InfoContents from './InfoContent';
import PrintContent from './PrintContent';
import TabNav from './TabNav';
import Ticker from './Ticker';

import { ChevronUpIcon } from './Icons';
import './unit.scss';

interface AdUnitProps {
  data: AdRecord;
  layout?: Layout;
  track: TrackFunction;
  translateString: TranslateFunction;
}

export enum Tab {
  Info = 0,
  About = 1,
  Contact = 2,
  Print = 3,
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
  constructor(props: AdUnitProps) {
    super(props);
    this.state = {
      expanded: false,
      shareModalExpanded: false,
      stretched: false,
      selectedTab: Tab.Info,

      isAgent: false,
      tabCount: 0,
      showInfoTab: false,
      showAboutTab: false,
      showContactTab: false,
      showPrintTab: false,
      adShape: 'square',
    };
  }

  public componentDidMount() {
    document.title = this.props.data.name;
  }

  public static getDerivedStateFromProps(nextProps: AdUnitProps) {
    const { categories, about, contact, print } = nextProps.data;
    const { email, place, phones } = contact;

    const showInfoTab = !!place.address1 || !!phones.length;
    const showAboutTab = !!about;
    const showContactTab = !!email;
    const showPrintTab = !!print.image && !!print.adLink;

    let isAgent = false;

    for (const c of categories) {
      if (c === 'real-estate' || c === 'insurance') {
        isAgent = true;
        break;
      }
    }

    let tabCount = 0;

    if (showInfoTab) {
      tabCount++;
    }
    if (showAboutTab) {
      tabCount++;
    }
    if (showContactTab) {
      tabCount++;
    }
    if (showPrintTab) {
      tabCount++;
    }

    const iframeHeight = window.innerHeight;
    const iframeWidth = window.innerWidth;
    let adShape;
    if (iframeHeight > iframeWidth) {
      adShape = 'vertical';
    } else if (iframeWidth > iframeHeight) {
      adShape = 'horizontal';
    } else if (iframeHeight === iframeWidth) {
      adShape = 'square';
    }

    return {
      isAgent,
      tabCount,
      showInfoTab,
      showAboutTab,
      showContactTab,
      showPrintTab,
      adShape,
    };
  }

  public toggleExpandUnit = () => {
    this.setState({
      expanded: !this.state.expanded,
    });

    this.props.track(
      TrackingKeys.NAVIGATION.CATEGORY_NAME,
      TrackingKeys.NAVIGATION.ACTIONS.EXPAND,
      ''
    );
  };

  public selectTab = (tab: Tab) => () => {
    switch (tab) {
      case Tab.About:
        this.props.track(
          TrackingKeys.NAVIGATION.CATEGORY_NAME,
          TrackingKeys.NAVIGATION.ACTIONS.CHANGE_VIEW,
          'about-us'
        );
        break;
      case Tab.Print:
        this.props.track(
          TrackingKeys.NAVIGATION.CATEGORY_NAME,
          TrackingKeys.NAVIGATION.ACTIONS.CHANGE_VIEW,
          'print-ad'
        );
        break;
      default:
        break;
    }

    this.setState({
      selectedTab: tab,
    });
  };

  public toggleShare = () => {
    this.setState({
      shareModalExpanded: !this.state.shareModalExpanded,
    });
  };

  public render() {
    const { data, layout, track, translateString } = this.props;
    const { headlines, name, about, print, contact, social, images } = data;
    const {
      tabCount,
      showAboutTab,
      showContactTab,
      showInfoTab,
      showPrintTab,
      isAgent,
    } = this.state;

    return (
      <Imagiro
        expanded={this.state.expanded}
        shareModalExpanded={this.state.shareModalExpanded}
        stretched={this.state.stretched}
        tabCount={tabCount}
        tickerCount={headlines.length}
        hasLogo={!!images.logo}
        isAgent={isAgent}
        layout={layout}
      >
        <div className="unit-outer">
          <Header image={images.logo} name={name} />
          <Background
            adShape={this.state.adShape}
            images={images}
            isBig={window.innerWidth > 700}
          />
          <Ticker headlines={headlines} />
          <div className="expand-button" onClick={this.toggleExpandUnit}>
            <div className="chevrons" />
          </div>
        </div>
        <div className="unit-inner">
          <div className="collapse-button" onClick={this.toggleExpandUnit}>
            <ChevronUpIcon />
          </div>
          <div className="content">
            <div className="content-nav">
              {showInfoTab && (
                <TabNav
                  tab={Tab.Info}
                  onClick={this.selectTab}
                  activeTab={this.state.selectedTab}
                  locale={data.locale}
                  translateString={translateString}
                />
              )}
              {showAboutTab && (
                <TabNav
                  tab={Tab.About}
                  onClick={this.selectTab}
                  activeTab={this.state.selectedTab}
                  locale={data.locale}
                  translateString={translateString}
                />
              )}
              {showContactTab && (
                <TabNav
                  tab={Tab.Contact}
                  onClick={this.selectTab}
                  activeTab={this.state.selectedTab}
                  locale={data.locale}
                  translateString={translateString}
                />
              )}
              {showPrintTab && (
                <TabNav
                  tab={Tab.Print}
                  onClick={this.selectTab}
                  activeTab={this.state.selectedTab}
                  locale={data.locale}
                  translateString={translateString}
                />
              )}
              <div className="clear" />
            </div>
            <InfoContents
              contact={contact}
              social={social}
              active={this.state.selectedTab === Tab.Info}
              toggleShare={this.toggleShare}
              name={name}
              track={track}
            />
            <AboutContent active={this.state.selectedTab === Tab.About} about={about} />
            <ContactContent
              active={this.state.selectedTab === Tab.Contact}
              email={contact.email}
              track={track}
              locale={data.locale}
              translateString={translateString}
              country={data.contact.place.country}
              partnerDomain={data.partnerDomain}
            />
            <PrintContent active={this.state.selectedTab === Tab.Print} print={print} />
          </div>
        </div>
      </Imagiro>
    );
  }
}
