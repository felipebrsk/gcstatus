import { useState } from 'react'

import { Requirement } from '@/types'

interface RequirementsProps {
  requirements: Requirement[]
}

function Requirements(props: RequirementsProps) {
  const { requirements } = props

  const uniqueTypes = Array.from(
    new Set(
      requirements.map((req) => `${req.type.name}-${req.type.type}`),
    ),
  ).map((key) => {
    const [name, type] = key.split('-')
    return { name, type }
  })

  const [activeTab, setActiveTab] = useState<string>(
    uniqueTypes.length > 0
      ? `${uniqueTypes[0].name}-${uniqueTypes[0].type}`
      : '',
  )

  return (
    <>
      <div className="flex gap-4 sm:flex-row flex-col">
        {uniqueTypes.map(({ name, type }, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 break-words ${
              activeTab === `${name}-${type}`
                ? 'bg-theme-red-900 shadow-lg hover:bg-red-700'
                : 'bg-zinc-900 hover:bg-zinc-800'
            }`}
            onClick={() => setActiveTab(`${name}-${type}`)}>
            {`${name.charAt(0).toUpperCase() + name.slice(1)} (${type.charAt(0).toUpperCase() + type.slice(1)})`}
          </button>
        ))}
      </div>

      {requirements
        .filter((req) => `${req.type.name}-${req.type.type}` === activeTab)
        .map((req) => (
          <div
            key={req.id}
            className="p-6 border dark:border-gray-800 border-gray-100 bg-gradient-to-b dark:from-zinc-900 from-gray-200 to-transparent rounded-lg shadow-lg relative duration-500 break-words animate-fade-in">
            <div className="absolute inset-0 rounded-lg opacity-10 hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

            <h3 className="sm:text-left text-center text-xl font-bold text-theme-red-900 mb-4">
              {req.type.name.charAt(0).toUpperCase() +
                req.type.name.slice(1)}{' '}
              Requirements
            </h3>

            <ul className="space-y-2 dark:text-gray-300 text-gray-700">
              <li>
                <span className="font-bold dark:text-white text-black">
                  OS:
                </span>{' '}
                {req.so}
              </li>
              <li>
                <span className=" dark:text-white text-black">CPU:</span>{' '}
                {req.cpu}
              </li>
              <li>
                <span className=" dark:text-white text-black">RAM:</span>{' '}
                {req.ram}
              </li>
              <li>
                <span className=" dark:text-white text-black">GPU:</span>{' '}
                {req.gpu}
              </li>
              <li>
                <span className=" dark:text-white text-black">
                  DirectX:
                </span>{' '}
                {req.dx}
              </li>
              <li>
                <span className=" dark:text-white text-black">
                  Storage:
                </span>{' '}
                {req.rom}
              </li>
              <li>
                <span className=" dark:text-white text-black">Bits:</span>{' '}
                {req.bits}-bit
              </li>
              {req.obs && (
                <li>
                  <span className=" dark:text-white text-black">
                    Notes:
                  </span>{' '}
                  {req.obs}
                </li>
              )}
            </ul>
          </div>
        ))}
    </>
  )
}

export default Requirements
