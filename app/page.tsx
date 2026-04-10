import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-white sm:text-left">
          Welcome to <a href="https://streaver.com" target="blank_" className="text-blue-600">Streaver</a> Technical Challenge!
        </h1>
        <p className="mt-4 text-2xl text-gray-600 dark:text-gray-300 text-center sm:text-left">
          This is a simple Next.js application to demonstrate fetching and displaying posts.
        </p>
        <Link href="/posts" className="mt-6 text-lg text-blue-600 hover:underline"> Go to Posts</Link>  

      </main>
    </div>
  );
}
