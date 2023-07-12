import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center mx-4 h-16'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>my-log</h1>
      </Link>
      <nav className='flex gap-4 text-xl'>
        <Link href='/'>HOME</Link>
        <Link href='/about'>ABOUT</Link>
        <Link href='/posts'>POSTS</Link>
        <Link href='/contact'>CONTACT</Link>
      </nav>
    </header>
  )
}
