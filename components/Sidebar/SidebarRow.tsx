import React, { SVGProps } from 'react';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <a className="group flex items-center max-w-fit space-x-2 rounded-full px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <span className="hidden md:inline-flex group-hover:text-twitter text-base lg:text-xl font-light ">
        {title}
      </span>
    </a>
  );
};

export default SidebarRow;
