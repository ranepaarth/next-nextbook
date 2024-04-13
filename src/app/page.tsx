import Feed from '@/components/Feed';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';

export default async function Home() {
  return (
    <div className=''>
      <Header />
      <main className='grid grid-cols-12 gap-x-4 px-2 py-2 sm:px-6 lg:gap-x-10 lg:px-16'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
