import Feed from '@/components/Feed';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

export default async function Home() {
  const posts = await getDocs(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  );
  const docs = posts.docs.map(post => {
    return {
      id: post.id,
      data: JSON.parse(JSON.stringify(post.data())),
    };
  });
  return (
    <div className=''>
      <Header />
      <main className='mt-5 flex w-full items-start gap-x-4 px-2 py-2 sm:px-4 lg:gap-x-12 lg:px-8'>
        <Sidebar />
        <Feed posts={docs} />
        <Widgets />
      </main>
    </div>
  );
}
