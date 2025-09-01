import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex gap-20 items-center justify-between mt-8">
      <div className="flex flex-col items-start gap-5 ">
        <h2 className="text-4xl  font-semibold tracking-wider">
          Sua encomenda na velocidade do céu. Sem trânsito, sem demora
        </h2>

        <Link
          href={'/details'}
          className="text-sm bg-cyan-500 px-8 py-4 font-semibold border-none rounded text-white "
        >
          Mais detalhes!
        </Link>
      </div>
      <Image
        className="w-80 rounded-ee-4xl rounded-ss-4xl"
        src={'/header-image.png'}
        width={800}
        height={800}
        alt=""
      />
    </div>
  )
}
