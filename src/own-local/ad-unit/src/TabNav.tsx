import * as React from 'react';

import { TranslateFunction } from '@own-local/ad-utils/lib/types';

import { Tab } from './AdUnit';
import {
  EmailOutlineIcon,
  FormattedListBulletedTypeIcon,
  InformationOutlineIcon,
  NewspaperIcon,
} from './Icons';

export interface TabNavProps {
  tab: Tab;
  onClick: (tab: Tab) => () => void;
  activeTab: Tab;
  locale: string;
  translateString: TranslateFunction;
}

const TabNav = (props: TabNavProps) => {
  const { locale, translateString } = props;

  let c = 'tab';
  let title = '';
  let Icon: (props: any) => JSX.Element;

  if (props.tab === props.activeTab) {
    c += ' active';
  }

  switch (props.tab) {
    case Tab.Info:
      c += ' info-tab';
      title = translateString('contact_info', locale, 'Contact Info');
      Icon = FormattedListBulletedTypeIcon;
      break;
    case Tab.About:
      c += ' about-tab';
      title = translateString('more_info', locale, 'More Info');
      Icon = InformationOutlineIcon;
      break;
    case Tab.Contact:
      c += ' contact-tab';
      title = translateString('sent_message', locale, 'Sent Message');
      Icon = EmailOutlineIcon;
      break;
    case Tab.Print:
      c += ' print-tab';
      title = translateString('print_version', locale, 'Print Version');
      Icon = NewspaperIcon;
  }

  return (
    <div className={c} title={title} onClick={props.onClick(props.tab)}>
      <Icon fill="rgba(0,0,0,0.5)" />
    </div>
  );
};

export default TabNav;
