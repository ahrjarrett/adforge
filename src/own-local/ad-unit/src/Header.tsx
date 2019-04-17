import * as React from 'react';

export interface HeaderProps {
  image?: string;
  name: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-container">
        {props.image && <div className="logo" style={{ backgroundImage: `url(${props.image})` }} />}
        <div className="name">
          <div className="name-interior">
            <p
              dangerouslySetInnerHTML={{ __html: props.name }}
              style={{ fontSize: props.name.length < 20 ? '16px' : '' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
