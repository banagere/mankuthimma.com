import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className='mt-5 text-3xl font-bold text-center hover:text-neutral-600 dark:hover:text-neutral-300'>
          <Link href="/">Mankuthimmana Kagga</Link>
      </div>
    </>
  )
}