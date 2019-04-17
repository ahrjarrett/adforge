import * as React from 'react';

import { formatPhoneNumber } from '@own-local/ad-utils/lib/formatter';
import TrackingKeys from '@own-local/ad-utils/lib/trackingKeys';
import { Contact, Social, TrackFunction } from '@own-local/ad-utils/lib/types';

import Address, { urlEncodedAddress } from '@own-local/ad-utils/lib/Address';
import {
  CloseIcon,
  DirectionsIcon,
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  MapMarkerIcon,
  OpenInNewIcon,
  PhoneIcon,
  PhoneOutgoingIcon,
  ShareIcon,
  TwitterIcon,
  YelpIcon,
} from './Icons';

export interface InfoContentsProps {
  contact: Contact;
  social: Social;
  active: boolean;
  toggleShare: () => void;
  name: string;
  track: TrackFunction;
}

const InfoContents = (props: InfoContentsProps) => {
  const { name, social, track } = props;
  const { twitter, instagram, facebook, yelp } = social;
  const { website, place, phones } = props.contact;
  const { address1, city, subdivision } = place;

  let cleanWebsite;
  if (website) {
    cleanWebsite = website
      .replace('www.', '')
      .replace('http://', '')
      .replace('https://', '')
      .replace(/\/$/, '');
  }

  // Safe address display
  const showAddress = !!address1 && !!city;
  let addressUrl = '';
  if (showAddress) {
    addressUrl = 'http://maps.google.com?daddr=' + urlEncodedAddress(place);
  }

  const showPhoneNumber = !!phones.length;
  const showShareButtons = !!website && !!city && !!name && !!subdivision;

  const twitterShareLink = `https://twitter.com/intent/tweet?text=${name} in ${city}, ${subdivision}&url=${website}`;
  const facebookShareLink = `https://www.facebook.com/sharer?u=${website}`;

  const socialIconStyle: React.CSSProperties = {
    margin: '10px',
  };

  let callLink;

  if (showPhoneNumber) {
    callLink = `tel:${phones[0].number}`;
  }

  return (
    <div className={`content-wrapper info ${props.active && 'content-active'}`}>
      {showAddress && (
        <a
          className="info-block directions-block"
          title="Get directions"
          target="_blank"
          href={addressUrl}
          onClick={() => {
            track(
              TrackingKeys.CONTACT.CATEGORY_NAME,
              TrackingKeys.CONTACT.ACTIONS.OPEN_DIRECTIONS,
              addressUrl
            );
          }}
        >
          <MapMarkerIcon className="mdi" />
          <Address place={place} />
          <DirectionsIcon className="mdi guide" />
        </a>
      )}
      {showPhoneNumber && (
        <a
          className="info-block phone-block"
          title="Call phone number"
          target="_blank"
          href={callLink}
          onClick={() => {
            track(TrackingKeys.CONTACT.CATEGORY_NAME, TrackingKeys.CONTACT.ACTIONS.CALL, callLink);
          }}
        >
          <PhoneIcon className="mdi" />
          <span className="text">{formatPhoneNumber(phones[0].number, place.country)}</span>
          <PhoneOutgoingIcon className="mdi guide" />
        </a>
      )}
      {website && (
        <a
          className="info-block website-block"
          title="Open website in a new tab"
          target="_blank"
          href={website}
          onClick={() => {
            track(
              TrackingKeys.CONTACT.CATEGORY_NAME,
              TrackingKeys.CONTACT.ACTIONS.WEBSITE,
              website
            );
          }}
        >
          <LinkIcon className="mdi" />
          <span className="text">{cleanWebsite}</span>
          <OpenInNewIcon className="mdi guide" />
        </a>
      )}
      <div className="social-buttons">
        {facebook && (
          <a
            className="share-facebook"
            target="_blank"
            href={facebook}
            onClick={() => {
              track(
                TrackingKeys.CONTACT.CATEGORY_NAME,
                TrackingKeys.CONTACT.ACTIONS.FACEBOOK,
                facebook
              );
            }}
          >
            <FacebookIcon className="mdi" style={socialIconStyle} fill="rgba(0,0,0,.5)" />
          </a>
        )}
        {twitter && (
          <a
            className="share-twitter"
            target="_blank"
            href={twitter}
            onClick={() => {
              track(
                TrackingKeys.CONTACT.CATEGORY_NAME,
                TrackingKeys.CONTACT.ACTIONS.TWITTER,
                twitter
              );
            }}
          >
            <TwitterIcon className="mdi" style={socialIconStyle} fill="rgba(0,0,0,.5)" />
          </a>
        )}
        {instagram && (
          <a
            className="share-instagram"
            target="_blank"
            href={instagram}
            onClick={() => {
              track(
                TrackingKeys.CONTACT.CATEGORY_NAME,
                TrackingKeys.CONTACT.ACTIONS.INSTAGRAM,
                instagram
              );
            }}
          >
            <InstagramIcon className="mdi" style={socialIconStyle} fill="rgba(0,0,0,.5)" />
          </a>
        )}
        {yelp && (
          <a
            className="share-yelp"
            target="_blank"
            href={yelp}
            onClick={() => {
              track(TrackingKeys.CONTACT.CATEGORY_NAME, TrackingKeys.CONTACT.ACTIONS.YELP, yelp);
            }}
          >
            <YelpIcon className="mdi" style={socialIconStyle} fill="rgba(0,0,0,.5)" />
          </a>
        )}
      </div>
      {showShareButtons && (
        <div>
          <span
            className="share-toggle share-toggle-more"
            title="Show Share Buttons"
            onClick={props.toggleShare}
          >
            <ShareIcon height={18} width={18} className="mdi" fill="rgba(0,0,0,.5)" />
          </span>
          <span
            className="share-toggle share-toggle-close mdi mdi-close"
            title="Hide Share Buttons"
            onClick={props.toggleShare}
          >
            <CloseIcon height={18} width={18} className="mdi" fill="rgba(0,0,0,.5)" />
          </span>
        </div>
      )}
      <div className="share-modal inactive">
        {website && (
          <a
            className="share-facebook"
            target="_blank"
            href={facebookShareLink}
            onClick={() => {
              track(
                TrackingKeys.SHARE.CATEGORY_NAME,
                TrackingKeys.SHARE.ACTIONS.FACEBOOK,
                facebookShareLink
              );
            }}
          >
            <FacebookIcon
              fill="#FFFFFF"
              style={{ paddingRight: '6px', lineHeight: '30px', marginBottom: '-5px' }}
            />
            Share
          </a>
        )}
        {showShareButtons && (
          <a
            className="share-twitter"
            target="_blank"
            href={twitterShareLink}
            onClick={() => {
              track(
                TrackingKeys.SHARE.CATEGORY_NAME,
                TrackingKeys.SHARE.ACTIONS.TWITTER,
                twitterShareLink
              );
            }}
          >
            <TwitterIcon
              fill="#FFFFFF"
              style={{ paddingRight: '6px', lineHeight: '30px', marginBottom: '-5px' }}
            />
            Tweet
          </a>
        )}
      </div>
    </div>
  );
};

export default InfoContents;
