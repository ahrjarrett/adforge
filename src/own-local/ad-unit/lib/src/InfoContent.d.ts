import { Contact, Social, TrackFunction } from '@own-local/ad-utils/lib/types';
export interface InfoContentsProps {
    contact: Contact;
    social: Social;
    active: boolean;
    toggleShare: () => void;
    name: string;
    track: TrackFunction;
}
declare const InfoContents: (props: InfoContentsProps) => JSX.Element;
export default InfoContents;
