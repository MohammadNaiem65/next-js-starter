export default function page() {
    return (
        <section>
            <h1 className='text-3xl'>Routes Groups</h1>

            <ul className='list-disc p-10'>
                <li>Routes Groups are a way to group routes together</li>
                <li>the group file name will not effect the route</li>
                <li>
                    Route groups need to be created using parenthesis{' '}
                    <code className=''>(group-name)</code>
                </li>
                <li>
                    We can use Route Groups to separate pages folders and create
                    different layout for them.
                </li>
            </ul>
        </section>
    );
}
