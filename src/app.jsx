import { h } from 'preact';
import { Link } from 'preact-router';

export default function App() {

  return (
    <>
      <div class="bg-gray-100 dark:bg-gray-500 min-h-screen flex flex-col justify-center items-center py-8 px-4">
        <p class="text-black text-4xl mb-4">Welcome to ROVE</p>
        {/* Image */}
        <img src="./src/assets/images/rove2.png" alt="" class="h-[50%] w-[50 %] mb-4 rounded-full " />

        <div class="flex flex-col items-center">
          {/* Login button */}
          <Link href={'/login'}>
            <button class="px-6 py-3 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-300">Login</button>
          </Link>
        </div>
      </div>

    </>
  )
}
