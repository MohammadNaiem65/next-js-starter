import Posts from "../components/Posts/Posts";

export default function Home() {
    return (
        <div className='p-10'>
            <h1 className='text-3xl font-semibold'>Posts:</h1>

            <Posts />
        </div>
    );
}
