import * as React from 'react';

import { Print } from '@own-local/ad-utils/lib/types';

export interface PrintContentProps {
  active: boolean;
  print: Print;
}

const PrintContent = (props: PrintContentProps) => {
  const { active } = props;
  const { adLink, image } = props.print;

  if (!adLink || !image) {
    return null;
  }

  // TODO: this can be removed onced the backend back-fills all the ads.
  const correctedAdLink = adLink.match(/^\/\/s3/) ? `https:${adLink}` : adLink;

  return (
    <div className={`content-wrapper print ${active && 'content-active'}`}>
      {active && (
        <a href={correctedAdLink} target="_blank" title="Open print version in new tab">
          <img src={image} />
        </a>
      )}
    </div>
  );
};

export default PrintContent;
