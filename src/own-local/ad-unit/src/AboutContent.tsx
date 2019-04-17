import * as React from 'react';

export interface ContactContentProps {
  active: boolean;
  about: string;
}

const ContactContent = (props: ContactContentProps) => {
  const { active, about } = props;

  return (
    <div
      className={`content-wrapper about ${active && 'content-active'}`}
      // TODO: This is not the goal. Fix this.
      dangerouslySetInnerHTML={{ __html: about }}
    />
  );
};

export default ContactContent;
