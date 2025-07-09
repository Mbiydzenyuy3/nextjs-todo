import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Make Your Todolist Here
          </h1>
          <p className="text-gray-600 mb-8">
            Plan a successful day with our Todolist Plan. Helps keep track of
            the things you have to do and reminds you when you&amp;apos;re too
            tired to remember. Join us now.
          </p>
          <Link href="/Todolist">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Plan Your Day
            </button>
          </Link>
        </div>
      </main>
      <footer className="w-full py-4 mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  )
}
