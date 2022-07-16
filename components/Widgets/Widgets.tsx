import { SearchIcon } from '@heroicons/react/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const Widgets = () => {
  return (
    <div className="mt-2 px-2">
      {/* Search Box  */}
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className=" flex-1 outline-none bg-transparent"
        />
      </div>
      <TwitterTimelineEmbed sourceType="profile" screenName="iknow_p" options={{ height: 1000 }} />
    </div>
  );
};
