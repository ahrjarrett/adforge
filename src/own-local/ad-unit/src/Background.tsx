import * as React from 'react';

import { Images } from '@own-local/ad-utils/lib/types';

export interface BackgroundProps {
  images: Images;
  adShape: 'horizontal' | 'vertical' | 'square';
  isBig: boolean;
}

export interface BackgroundState {
  loaded: boolean;
  width: number;
  height: number;
  imageShape: 'tall' | 'fat';
}

export default class Background extends React.Component<BackgroundProps, BackgroundState> {
  private image: HTMLImageElement;
  constructor(props: BackgroundProps) {
    super(props);

    this.image = new Image();
    this.image.src = props.images.picture.sm;
    this.image.onload = this.handleImageLoaded;
    this.image.onerror = this.handleImageError;

    this.state = {
      loaded: false,
      imageShape: undefined,
      height: undefined,
      width: undefined,
    };
  }

  public handleImageLoaded = (e: Event) => {
    const w = e.target['width'];
    const h = e.target['height'];

    const imageShape = w > h ? 'fat' : 'tall';

    this.setState({
      loaded: true,
      height: h,
      width: w,
      imageShape,
    });
  };

  public handleImageError = () => {
    this.setState({ loaded: false });
  };

  public render() {
    const { adShape, isBig } = this.props;
    const { imageShape, loaded } = this.state;
    const { offsets, picture } = this.props.images;
    const { lg, md } = picture;
    const offset = offsets[adShape];

    const bg = isBig ? lg : md;

    if (loaded) {
      const bgpos = {
        x: imageShape === 'fat' ? 50 + offset : 50,
        y: imageShape === 'tall' ? 50 + offset : 50,
      };
      if (adShape === 'horizontal') {
        bgpos.x = 50;
        bgpos.y = 50 + offset;
      } else if (adShape === 'vertical') {
        bgpos.x = 50 + offset;
        bgpos.y = 50;
      }

      return (
        <div
          className="background"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: `${bgpos.x}% ${bgpos.y}%`,
          }}
        />
      );
    } else {
      return (
        <div
          className="background"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
      );
    }
  }
}
