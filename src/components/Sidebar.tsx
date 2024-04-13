import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/nextAuthOptions';
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { getServerSession } from 'next-auth';
import SideBarRow from './SideBarRow';

async function Sidebar() {
  const session = await getServerSession(nextAuthOptions);
  return (
    <aside className='flex w-fit max-w-[600px] flex-col space-y-2 rounded-lg p-2 sm:w-3/12 sm:min-w-[150px] sm:bg-white'>
      <SideBarRow src={session?.user?.image} title={session?.user?.name} />
      <SideBarRow Icon={UsersIcon} title={'Friends'} />
      <SideBarRow Icon={UserGroupIcon} title={'Groups'} />
      <SideBarRow Icon={ShoppingBagIcon} title={'MarketPlace'} />
      <SideBarRow Icon={ComputerDesktopIcon} title={'Watch'} />
      <SideBarRow Icon={CalendarIcon} title={'Events'} />
      <SideBarRow Icon={ClockIcon} title={'Memories'} />
      <SideBarRow Icon={ChevronDownIcon} title={'See More'} />
    </aside>
  );
}

export default Sidebar;
