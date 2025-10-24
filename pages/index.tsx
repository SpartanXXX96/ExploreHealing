import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import DestinationCard from '../components/DestinationCard'
type Dest = { id: string; name: string; region: string; shortDesc: string; photo: string; videoEmbed: string; coordinates: string; }
export default function Home() {
  const [data, setData] = useState<Dest[]>([])
  useEffect(()=>{ fetch('/data/destinations.csv').then(r=>r.text()).then(csv=>{ const parsed = Papa.parse(csv,{header:true}); setData(parsed.data as Dest[]) }) },[])
  return (
    <main className='min-h-screen bg-gradient-to-b from-white to-orange-50'>
      <header className='max-w-6xl mx-auto py-8 px-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-extrabold text-orange-600'>ExploreHealing</h1>
            <p className='text-sm text-gray-600'>Modern travel guides — Jawa Tengah & Yogyakarta</p>
          </div>
        </div>
      </header>
      <section className='max-w-6xl mx-auto px-4 pb-20'>
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-800'>Grid Gallery</h2>
          <div className='text-sm text-gray-500'>50 Destinasi • Jawa Tengah & DIY</div>
        </div>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {data.map((d)=> (<DestinationCard key={d.id} data={d} />))}
        </div>
      </section>
    </main>
  )
}
