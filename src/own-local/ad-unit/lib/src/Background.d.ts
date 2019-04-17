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
    private image;
    constructor(props: BackgroundProps);
    handleImageLoaded: (e: Event) => void;
    handleImageError: () => void;
    render(): JSX.Element;
}
