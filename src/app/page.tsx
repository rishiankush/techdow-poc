import Link from 'next/link';

const blogs = [
  { id: 1, name: 'First' },
  { id: 2, name: 'Second' },
  { id: 3, name: 'Third' },
  { id: 4, name: 'Fourth' },
];

export default async function Home() {

  return (
    <div>
      New Project
      <div className='flex flex-col'>
        {blogs.map((item) => (
          <Link href={`/${item.id}`}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
}
