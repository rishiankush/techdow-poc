import getBlogs from '@/components/getBlogs';

export default async function Blog({ params }: { params: { id: number } }) {
  const data = await getBlogs(params.id);
  console.log('Data:---', data);
  return (
    <>
      <div>My Post: {data.title}</div>
      <div dangerouslySetInnerHTML={{__html: data.content}}></div>
    </>
  );
}
