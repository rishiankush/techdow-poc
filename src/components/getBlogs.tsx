export default function getBlogs(id: number) {
  console.log('requested');
  const res = fetch('http://techdowsdb.aitatechnologies.org/getBlog', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ postId: id }),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log('res ******* ', res);
      return res;
    })
    .catch(() => {
      return 'Nothing found';
    });

  return res;
}
