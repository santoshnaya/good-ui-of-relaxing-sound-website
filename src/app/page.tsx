'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlayIcon, ArrowPathIcon, BellIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { quotes } from '@/utils/quotes';

interface SoundScene {
  name: string;
  image: string;
  category: string;
}

const soundScenes: SoundScene[] = [
  { name: 'Peaceful Forest', image: '/scenario/1.webp', category: 'Nature' },
  { name: 'Ocean Waves', image: '/scenario/2.jpg', category: 'Water' },
  { name: 'Mountain Stream', image: '/scenario/3.jpg', category: 'Water' },
  { name: 'Night Cricket', image: '/scenario/4.webp', category: 'Nature' },
  { name: 'Gentle Rain', image: '/scenario/5.jpg', category: 'Water' },
  { name: 'Campfire', image: '/scenario/6.jpg', category: 'Ambient' },
  { name: 'Morning Birds', image: '/scenario/7.webp', category: 'Nature' },
  { name: 'Waterfall', image: '/scenario/8.webp', category: 'Water' },
  { name: 'Wind Chimes', image: '/scenario/9.jpg', category: 'Ambient' },
  { name: 'Thunder Storm', image: '/scenario/10.jpg', category: 'Weather' },
  { name: 'Beach Waves', image: '/scenario/16.jpg', category: 'Water' },
  { name: 'Forest Night', image: '/scenario/17.jpg', category: 'Nature' },
  // Reusing images but with different contexts
  { name: 'Meditation Garden', image: '/scenario/1.webp', category: 'Meditation' },
  { name: 'River Rapids', image: '/scenario/2.jpg', category: 'Water' },
  { name: 'Forest Stream', image: '/scenario/3.jpg', category: 'Nature' },
  { name: 'Evening Insects', image: '/scenario/4.webp', category: 'Nature' },
  { name: 'Summer Rain', image: '/scenario/5.jpg', category: 'Weather' },
  { name: 'Cozy Fireplace', image: '/scenario/6.jpg', category: 'Ambient' },
  { name: 'Dawn Chorus', image: '/scenario/7.webp', category: 'Nature' },
  { name: 'Mountain Falls', image: '/scenario/8.webp', category: 'Water' },
  { name: 'Temple Bells', image: '/scenario/9.jpg', category: 'Meditation' },
  { name: 'Rain Storm', image: '/scenario/10.jpg', category: 'Weather' },
  { name: 'Coastal Winds', image: '/scenario/16.jpg', category: 'Weather' },
  { name: 'Mystical Forest', image: '/scenario/17.jpg', category: 'Meditation' },
];

export default function Home() {
  const categories = ['All', 'Nature', 'Water', 'Weather', 'Ambient', 'Meditation'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [quote, setQuote] = React.useState('');

  React.useEffect(() => {
    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);
  
  const filteredScenes = selectedCategory === 'All'
    ? soundScenes
    : soundScenes.filter(scene => scene.category === selectedCategory);
  return (
    <main className="min-h-screen bg-[#0A0B1A] text-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <div className="text-2xl font-bold">Soundia.</div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/sounds" className="hover:text-gray-300">Sounds</Link>
            <Link href="#" className="hover:text-gray-300">Blog</Link>
            <Link href="#" className="hover:text-gray-300">Apps</Link>
            <Link href="#" className="hover:text-gray-300">About Us</Link>
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
          <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto mb-12 relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-12 leading-tight font-playfair tracking-wide text-white/90 transition-opacity duration-500 hover:text-white">
              {quote}
            </h1>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105">
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

        {/* Category Filter */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scene Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 pb-12">
          {filteredScenes.map((scene) => (
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
