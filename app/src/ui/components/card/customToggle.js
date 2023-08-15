import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const customToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="a"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="dots-menu">
      <BsThreeDotsVertical size={20} />
    </div>
  </a>
));

export default customToggle;
