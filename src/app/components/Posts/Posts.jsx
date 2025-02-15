import Post from './Post';

export default async function Posts() {
    const data = await fetch('https://api.vercel.app/blog');
    if (!data.ok) throw new Error('Failed to fetch data');
    const posts = await data.json();

    return (
        <section className='mt-5 grid grid-cols-4 gap-y-4'>
            {posts.map((post) => (
                <Post key={post?.id} post={post} />
            ))}
        </section>
    );
}
