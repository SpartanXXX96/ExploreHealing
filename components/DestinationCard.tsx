import React from 'react'
export default function DestinationCard({ data }: { data: any }) {
  return (
    <article className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow'>
      <div className='h-56 w-full overflow-hidden'>
        <img src={data.photo} alt={data.name} className='w-full h-full object-cover transform hover:scale-105 transition-transform' />
      </div>
      <div className='p-4'>
        <h3 className='font-semibold text-lg text-gray-800'>{data.name}</h3>
        <p className='text-xs text-gray-500'>{data.region}</p>
        <p className='mt-2 text-gray-700 text-sm'>{data.shortDesc}</p>
        {data.videoEmbed && (<div className='mt-3'><iframe className='w-full h-40 rounded-md' src={data.videoEmbed} allowFullScreen></iframe></div>)}
        <div className='mt-3 text-xs text-gray-400'>{data.coordinates}</div>
      </div>
    </article>
  )
}
