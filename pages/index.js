import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <Head>
        <title>LegalBriefs360</title>
        <meta name="description" content="AI-powered legal brief summaries in seconds." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">LegalBriefs360</h1>
        <p className="text-xl md:text-2xl mb-6">AI-powered legal brief summaries in seconds.</p>
        <form action="https://formspree.io/f/mnqeyzya" method="POST" className="max-w-md mx-auto">
          <input type="email" name="email" placeholder="Enter your email" required
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"/>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Notify Me
          </button>
        </form>
      </main>
    </div>
  );
}
