import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Photography Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          CAPTURE YOUR EVERY <span className="text-blue-600">MOMENT</span>
        </h1>

        <p className="mt-3 text-2xl">
          Capture all those unique moments with friends and family in the school.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Personal Photography &rarr;</h3>
            <p className="mt-4 text-xl">
              Professional personal photography sessions.
            </p>
          </div>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Travel Photography &rarr;</h3>
            <p className="mt-4 text-xl">
              Capture your travel memories with our experts.
            </p>
          </div>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Wedding Photography &rarr;</h3>
            <p className="mt-4 text-xl">
              Beautiful wedding photography to cherish forever.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}