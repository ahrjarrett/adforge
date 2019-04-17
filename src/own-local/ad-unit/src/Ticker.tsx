import * as React from 'react';

function renderTickerItem(headline: string, index: number) {
  const itemNumber = index + 1;

  // We add the rendering logic below so that when the text is too long on the horizontal ads,
  // then we will make the text proportionally smaller, by applying an inline style.
  const tooMuchTextLim = 35;
  const textLim = 50;
  const length = headline.length;
  const percentOfFontDecrease = (length - tooMuchTextLim) / (textLim - tooMuchTextLim);
  const fixTextOverflow = length > tooMuchTextLim;

  let newFontSize;
  if (window.innerHeight <= 50) {
    newFontSize = 15 - (window.innerWidth <= 300 ? 4 : 3) * percentOfFontDecrease;
  } else if (window.innerHeight <= 90) {
    newFontSize = 25 - 6 * percentOfFontDecrease;
  }

  const smallFontStyle: React.CSSProperties = {
    fontSize: `${newFontSize}px`,
  };
  return (
    <div
      key={itemNumber}
      className={`ticker-item ticker-item-${itemNumber}`}
      style={fixTextOverflow ? smallFontStyle : {}}
      // TODO: This is not the goal. Fix this.
      dangerouslySetInnerHTML={{ __html: headline }}
    />
  );
}

export interface TickerProps {
  headlines: string[];
}

const Ticker = (props: TickerProps) => {
  return <div className="ticker">{props.headlines.map(renderTickerItem)}</div>;
};

export default Ticker;
