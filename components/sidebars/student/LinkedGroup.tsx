import { useState } from 'react';
import { SidebarLinkGroupProps } from '../../../@types';

const SidebarLinkGroup = ({
  children,
  activeCondition
}: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
