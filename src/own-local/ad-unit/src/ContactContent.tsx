import * as React from 'react';

import TrackingKeys from '@own-local/ad-utils/lib/trackingKeys';
import { TrackFunction, TranslateFunction } from '@own-local/ad-utils/lib/types';
import { getHost } from '@own-local/ad-utils/lib/url';

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

const ENABLE_FORM_FOR_COUNTRIES = ['US'];

const getFormValue = (form: HTMLFormElement, field: string): string => {
  const element = form.elements.namedItem(field);
  if (element instanceof HTMLInputElement) {
    return element.value;
  }
  if (element instanceof HTMLTextAreaElement) {
    return element.value;
  }
  return '';
};

export default class ContactContent extends React.Component<
  ContactContentProps,
  ContactContentState
> {
  constructor(props: ContactContentProps) {
    super(props);

    this.state = {
      sendingEmail: false,
      emailSentSuccessfully: false,
      emailSentFailed: false,
    };
  }

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.sendingEmail) {
      return;
    }

    this.props.track(
      TrackingKeys.CONTACT.CATEGORY_NAME,
      TrackingKeys.CONTACT.ACTIONS.SUBMIT,
      event
    );

    this.setState({ sendingEmail: true, emailSentFailed: false, emailSentSuccessfully: false });

    const payload = {
      name: getFormValue(event.currentTarget, 'name'),
      email: getFormValue(event.currentTarget, 'email'),
      toEmail: this.props.email,
      subject: this.props.translateString(
        'email_subject',
        this.props.locale,
        'New email from your ad on {partnerDomain}',
        { partnerDomain: getHost(this.props.partnerDomain) }
      ),
      message: getFormValue(event.currentTarget, 'message'),
      isContactFormRequest: true,
    };

    this.submit(payload);
  };

  public submit = (payload: {
    name: string;
    email: string;
    toEmail: string;
    message: string;
  }): any => {
    const formStage = App.env === 'production' ? 'api' : 'api_staging';
    const formEndpoint = `https://platform.ownlocal.com/${formStage}/mailer/email`;

    fetch(formEndpoint, {
      method: 'post',
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          this.setState({
            sendingEmail: false,
            emailSentFailed: false,
            emailSentSuccessfully: true,
          });
        } else {
          this.setState({
            sendingEmail: false,
            emailSentSuccessfully: false,
            emailSentFailed: true,
          });
        }
      })
      .catch(() => {
        this.setState({ sendingEmail: false, emailSentSuccessfully: false, emailSentFailed: true });
      });
  };

  public render() {
    const { active, locale, translateString, email, country } = this.props;
    const { sendingEmail, emailSentSuccessfully, emailSentFailed } = this.state;
    let contents;

    if (ENABLE_FORM_FOR_COUNTRIES.indexOf(country) < 0) {
      contents = (
        <a href={`mailto:${email}`}>
          {translateString('contact_by_email', locale, 'Send an email to this business')}
        </a>
      );
    } else if (emailSentSuccessfully) {
      contents = (
        <span className="success">{translateString('email_sent', locale, 'Email sent')}</span>
      );
    } else {
      contents = (
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <input
              type="text"
              name="name"
              placeholder={translateString('name', locale, 'Name')}
              required
            />
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder={translateString('email', locale, 'Email')}
              required
            />
          </div>
          <div className="input">
            <textarea
              name="message"
              placeholder={translateString('your_message', locale, 'Your Message')}
              required
            />
          </div>
          <div className="submit">
            <input
              type="submit"
              disabled={sendingEmail}
              value={translateString('send', locale, 'Send')}
            />
          </div>
          <div className="error">
            {emailSentFailed ? translateString('error', locale, 'Error') : ''}
          </div>
        </form>
      );
    }

    return (
      <div className={`content-wrapper contact ${active && 'content-active'}`}>{contents}</div>
    );
  }
}
