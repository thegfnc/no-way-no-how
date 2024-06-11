export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-16 p-8'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-4xl font-semibold md:text-8xl'>no way no how</h1>
        <div>music by Jason Desiderio</div>
      </div>
      <div className='w-full max-w-[480px]'>
        <iframe
          style={{ borderRadius: '12px' }}
          src='https://open.spotify.com/embed/artist/0Hhn7jlCTbqNyAOrI458SR?utm_source=generator'
          width='100%'
          height='352'
          frameBorder='0'
          allowFullScreen={false}
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
      </div>
      <div>
        <strong>Contact:</strong>{' '}
        <a
          href='mailto:hello@thegoodfornothings.club'
          className='underline underline-offset-2 hover:no-underline'
        >
          hello@thegoodfornothings.club
        </a>{' '}
        &bull;{' '}
        <a
          href='https://soundcloud.com/no-way-no-how'
          className='underline underline-offset-2 hover:no-underline'
        >
          Soundcloud
        </a>
      </div>
    </main>
  )
}
