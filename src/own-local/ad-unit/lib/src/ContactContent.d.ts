import * as React from 'react';
import { TrackFunction, TranslateFunction } from '@own-local/ad-utils/lib/types';
export interface ContactContentProps {
    active: boolean;
    email: string;
    track: TrackFunction;
    locale: string;
    country?: string;
    partnerDomain: string;
    translateString: TranslateFunction;
}
interface ContactContentState {
    sendingEmail: boolean;
    emailSentSuccessfully: boolean;
    emailSentFailed: boolean;
}
export default class ContactContent extends React.Component<ContactContentProps, ContactContentState> {
    constructor(props: ContactContentProps);
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    submit: (payload: {
        name: string;
        email: string;
        toEmail: string;
        message: string;
    }) => any;
    render(): JSX.Element;
}
export {};
