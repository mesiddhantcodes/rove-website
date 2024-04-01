import { h } from 'preact';
import { Link } from 'preact-router';

export default function App() {

  return (
    <>
      <div class="bg-white min-h-screen flex flex-col justify-center items-center py-8 px-4">
        <p class="text-black text-4xl mb-4">Welcome to ROVE</p>
        {/* Image */}
        <img src="./src/assets/images/rove.png" alt="" class="h-32 w-32 mb-4" />

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
