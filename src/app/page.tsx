import Image from 'next/image';
import { PlayIcon, ArrowPathIcon, BellIcon } from '@heroicons/react/24/solid';

const soundScenes = [
  { name: 'Peaceful Forest', image: '/scenario/1.webp' },
  { name: 'Ocean Waves', image: '/scenario/2.jpg' },
  { name: 'Mountain Stream', image: '/scenario/3.jpg' },
  { name: 'Night Cricket', image: '/scenario/4.webp' },
  { name: 'Gentle Rain', image: '/scenario/5.jpg' },
  { name: 'Campfire', image: '/scenario/6.jpg' },
  { name: 'Morning Birds', image: '/scenario/7.webp' },
  { name: 'Waterfall', image: '/scenario/8.webp' },
  { name: 'Wind Chimes', image: '/scenario/9.jpg' },
  { name: 'Thunder Storm', image: '/scenario/10.jpg' },
  { name: 'Beach Waves', image: '/scenario/16.jpg' },
  { name: 'Forest Night', image: '/scenario/17.jpg' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B1A] text-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <div className="text-2xl font-bold">Soundia.</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Sounds</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
            <a href="#" className="hover:text-gray-300">Apps</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-800">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full bg-gray-800">
              <div className="h-6 w-6 rounded-full bg-gray-400"></div>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1B2E] to-[#0A0B1A] p-8 min-h-[600px] mb-12">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/scenario/1.webp"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-start max-w-2xl mb-12 relative z-10">
            <h1 className="text-6xl font-light mb-8 leading-tight">
              fall asleep to our<br />
              beautiful sleep sounds
            </h1>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center space-x-2">
              <span>Sign Up For Free</span>
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Player Controls */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center space-x-4 z-20 bg-[#0A0B1A]/50 p-4 rounded-2xl backdrop-blur-sm">
            <button className="p-4 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
              <PlayIcon className="h-6 w-6" />
            </button>
            <button className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <ArrowPathIcon className="h-6 w-6" />
            </button>
            <button className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <div className="h-6 w-6 rounded-full bg-red-500"></div>
            </button>
            <div className="flex-1 px-4">
              <div className="h-1 bg-gray-700 rounded-full">
                <div className="h-full w-1/3 bg-indigo-600 rounded-full"></div>
              </div>
            </div>
            <div className="text-sm">03:20 / 18:30</div>
          </div>
        </div>

        {/* Scene Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 pb-12">
          {soundScenes.map((scene) => (
            <div key={scene.name} className="relative rounded-xl overflow-hidden cursor-pointer group">
              <Image
                src={scene.image}
                alt={scene.name}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover transition-transform group-hover:scale-110 duration-700"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-500">
                <div className="text-center">
                  <span className="text-lg font-medium block">{scene.name}</span>
                  <span className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Click to play</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
