import { h } from 'preact';
import { Link } from 'preact-router';

export default function App() {

  return (
    <>
      <div class='bg-white flex flex-col justify-center items-center h-screen'>
        <p class="text-black text-4xl">Welcome to ROVE</p>
        {/* img */}

        {/* images from the assets folder */}
        <img src="./src/assets/rove.png" alt="" class="h-32 w-32" />

        <Link href={'/login'}>
          <button class="p-2 pr-4 pl-4 text-white bg-black rounded-md">Login</button>
        </Link>

      </div>

    </>
  )
}
