import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className='text-3xl font-bold text-center my-9 hover:text-neutral-600 dark:hover:text-neutral-300'>
          <Link href="/">Mankuthimmana Kagga</Link>
      </div>
    </>
  )
}