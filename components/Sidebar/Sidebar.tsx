import SidebarRow from './SidebarRow';
import {
  BellIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  CollectionIcon,
  BookmarkIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline';

export const Sidebar = () => {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img className="m-3 h-10 w-10" src="/images/twitter.png" alt="twitter home" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign in" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
};
