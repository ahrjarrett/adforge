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

const Imagiro: React.SFC<ImagiroProps> = props => {
  let c = 'imagiro';

  if (props.expanded) {
    c += ' expanded';
  } else {
    c += ' collapsed';
  }

  if (props.shareModalExpanded) {
    c += ' share-active';
  } else {
    c += ' share-inactive';
  }

  if (props.stretched) {
    c += ' stretched';
  }

  if (props.tabCount) {
    c += ` tabs-tally-${props.tabCount}`;
  }

  if (props.tickerCount) {
    c += ` ticker-items-tally-${props.tickerCount}`;
  }

  if (!props.hasLogo) {
    c += ' no-logo';
  }

  if (props.isAgent) {
    c += ' agent';
  }

  c += ` layout-${props.layout}`;

  return <div className={c}>{props.children}</div>;
};

Imagiro.defaultProps = {
  layout: '1',
};

export default Imagiro;
