export default function Post({ post }) {
    return (
        <div className='max-w-xs rounded-md shadow-md dark:bg-gray-800 dark:text-white'>
            <img
                src='https://source.unsplash.com/random/300x300/?2'
                alt=''
                className='object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500'
            />
            <div className='flex flex-col justify-between p-6 space-y-8'>
                <h2 className='text-3xl font-semibold tracking-wide'>
                    {post?.title}
                </h2>
            </div>
        </div>
    );
}
