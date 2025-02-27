import Link from 'next/link'

export default function HomeForm() {
  return (
    <div className={'flex flex-col flex-1'}>
      <div className={'footer-form'}>
        <Link
          href={'/admin'}
          className={'solid-button'}
          color={'primary'}
          type={'button'}
        >
          Admin
        </Link>
        <Link
          href={'/logout'}
          className={'solid-button'}
          color={'primary'}
          type={'button'}
        >
          Logout
        </Link>
      </div>
    </div>
  )
}
