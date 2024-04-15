import Feed from '@/components/Feed';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';

export default async function Home() {
  return (
    <div className=''>
      <Header />
      <main className='mt-5 flex w-full items-start gap-x-4 px-2 py-2 sm:px-4 lg:gap-x-12 lg:px-8'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
