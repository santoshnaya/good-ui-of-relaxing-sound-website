'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const gradients = [
  'from-purple-500 to-pink-500',
  'from-cyan-500 to-blue-500',
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-orange-500',
  'from-red-500 to-rose-500',
  'from-indigo-500 to-purple-500',
  'from-blue-500 to-violet-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-amber-500',
  'from-pink-500 to-rose-500',
  'from-violet-500 to-fuchsia-500',
  'from-teal-500 to-cyan-500',
  'from-rose-500 to-red-500',
  'from-amber-500 to-yellow-500',
  'from-sky-500 to-blue-500',
  'from-lime-500 to-green-500',
  'from-fuchsia-500 to-pink-500',
  'from-emerald-500 to-green-500',
  'from-violet-500 to-indigo-500',
  'from-amber-500 to-red-500',
];

const sounds = [
  // Water Sounds - Extended
  {
    name: 'Rain on Roof',
    category: 'Water',
    icon: '🏠',
    image: '/sounds-cards-images/pxfuel.jpg',
  },
  {
    name: 'Rain on Window',
    category: 'Water',
    icon: '🪟',
    image: '/sounds-cards-images/pxfuel (1).jpg',
  },
  {
    name: 'Rain on Leaves',
    category: 'Water',
    icon: '🍃',
    image: '/sounds-cards-images/pxfuel (2).jpg',
  },
  {
    name: 'River Rapids',
    category: 'Water',
    icon: '🌊',
    image: '/sounds-cards-images/pxfuel (3).jpg',
  },
  {
    name: 'Lake Waves',
    category: 'Water',
    icon: '💧',
    image: '/sounds-cards-images/pxfuel (4).jpg',
  },
  {
    name: 'Fountain',
    category: 'Water',
    icon: '⛲',
    image: '/sounds-cards-images/pxfuel (5).jpg',
  },
  {
    name: 'Dripping Cave',
    category: 'Water',
    icon: '💦',
    image: '/sounds-cards-images/pxfuel (6).jpg',
  },
  // Water Sounds
  {
    name: 'Rain Light',
    category: 'Water',
    icon: '☔️',
    image: '/sounds-cards-images/pxfuel (7).jpg',
  },
  {
    name: 'Rain Heavy',
    category: 'Water',
    icon: '🌧️',
    image: '/sounds-cards-images/pxfuel (8).jpg',
  },
  {
    name: 'Ocean Waves',
    category: 'Water',
    icon: '🌊',
    image: '/sounds-cards-images/pxfuel (9).jpg',
  },
  {
    name: 'Beach Waves',
    category: 'Water',
    icon: '🏖️',
    image: '/sounds-cards-images/pxfuel (10).jpg',
  },
  {
    name: 'Stream',
    category: 'Water',
    icon: '💧',
  },
  {
    name: 'Waterfall',
    category: 'Water',
    icon: '⛲',
  },
  // Nature Sounds - Extended
  {
    name: 'Jungle Night',
    category: 'Nature',
    icon: '🌴',
  },
  {
    name: 'Mountain Wind',
    category: 'Nature',
    icon: '🏔',
  },
  {
    name: 'Deer Forest',
    category: 'Nature',
    icon: '🦌',
  },
  {
    name: 'Eagle Call',
    category: 'Nature',
    icon: '🦅',
  },
  {
    name: 'Fox Sounds',
    category: 'Nature',
    icon: '🦊',
  },
  {
    name: 'Bear Growl',
    category: 'Nature',
    icon: '🐻',
  },
  {
    name: 'Dolphin Calls',
    category: 'Nature',
    icon: '🐬',
  },
  // Nature Sounds
  {
    name: 'Forest Birds',
    category: 'Nature',
    icon: '🐦',
  },
  {
    name: 'Crickets',
    category: 'Nature',
    icon: '🦗',
  },
  {
    name: 'Forest Night',
    category: 'Nature',
    icon: '🌳',
  },
  {
    name: 'Morning Birds',
    category: 'Nature',
    icon: '🌅',
  },
  {
    name: 'Wolf Howl',
    category: 'Nature',
    icon: '🐺',
  },
  {
    name: 'Owl Night',
    category: 'Nature',
    icon: '🦉',
  },
  // Weather Sounds - Extended
  {
    name: 'Hurricane',
    category: 'Weather',
    icon: '🌪',
  },
  {
    name: 'Tornado',
    category: 'Weather',
    icon: '🌪',
  },
  {
    name: 'Hail Storm',
    category: 'Weather',
    icon: '🌨',
  },
  {
    name: 'Desert Wind',
    category: 'Weather',
    icon: '🏜',
  },
  {
    name: 'Arctic Wind',
    category: 'Weather',
    icon: '🧭',
  },
  {
    name: 'Monsoon Rain',
    category: 'Weather',
    icon: '🌧',
  },
  {
    name: 'Spring Storm',
    category: 'Weather',
    icon: '🌦',
  },
  // Weather Sounds
  {
    name: 'Thunder Storm',
    category: 'Weather',
    icon: '⚡',
  },
  {
    name: 'Wind Gentle',
    category: 'Weather',
    icon: '🌬️',
  },
  {
    name: 'Storm Wind',
    category: 'Weather',
    icon: '🌪️',
  },
  {
    name: 'Snow Storm',
    category: 'Weather',
    icon: '🌨️',
  },
  // Ambient Sounds - Extended
  {
    name: 'Train Station',
    category: 'Ambient',
    icon: '🚂',
  },
  {
    name: 'Airport',
    category: 'Ambient',
    icon: '✈️',
  },
  {
    name: 'Restaurant',
    category: 'Ambient',
    icon: '🍴',
  },
  {
    name: 'School',
    category: 'Ambient',
    icon: '🏫',
  },
  {
    name: 'Market',
    category: 'Ambient',
    icon: '🏪',
  },
  {
    name: 'Park',
    category: 'Ambient',
    icon: '🏞',
  },
  {
    name: 'Cafe Dishes',
    category: 'Ambient',
    icon: '🍽',
  },
  // Ambient Sounds
  {
    name: 'City Traffic',
    category: 'Ambient',
    icon: '🚦',
  },
  {
    name: 'Coffee Shop',
    category: 'Ambient',
    icon: '☕',
  },
  {
    name: 'Keyboard',
    category: 'Ambient',
    icon: '⌨️',
  },
  {
    name: 'Library',
    category: 'Ambient',
    icon: '📚',
  },
  {
    name: 'Office',
    category: 'Ambient',
    icon: '💼',
  },
  {
    name: 'White Noise',
    category: 'Ambient',
    icon: '📻',
  },
  // Meditation Sounds - Extended
  {
    name: 'Zen Garden',
    category: 'Meditation',
    icon: '🌿',
  },
  {
    name: 'Prayer Bells',
    category: 'Meditation',
    icon: '🔔',
  },
  {
    name: 'Bamboo Flute',
    category: 'Meditation',
    icon: '🎷',
  },
  {
    name: 'Sacred Drums',
    category: 'Meditation',
    icon: '🥁',
  },
  {
    name: 'Mantra Chant',
    category: 'Meditation',
    icon: '💬',
  },
  {
    name: 'Gong Bath',
    category: 'Meditation',
    icon: '🌀',
  },
  {
    name: 'Temple Ambience',
    category: 'Meditation',
    icon: '🛕',
  },
  // Meditation Sounds
  {
    name: 'Wind Chimes',
    category: 'Meditation',
    icon: '🎐',
  },
  {
    name: 'Meditation Bowl',
    category: 'Meditation',
    icon: '🥣',
  },
  {
    name: 'Temple Bells',
    category: 'Meditation',
    icon: '🔔',
  },
  {
    name: 'Om Chanting',
    category: 'Meditation',
    icon: '🕉️',
  },
  {
    name: 'Crystal Bowls',
    category: 'Meditation',
    icon: '🏺',
  },
  // Music Sounds - Extended
  {
    name: 'Cello Solo',
    category: 'Music',
    icon: '🎻',
  },
  {
    name: 'Wind Orchestra',
    category: 'Music',
    icon: '🎺',
  },
  {
    name: 'Music Box',
    category: 'Music',
    icon: '🎶',
  },
  {
    name: 'Kalimba',
    category: 'Music',
    icon: '🎷',
  },
  {
    name: 'Violin Night',
    category: 'Music',
    icon: '🎻',
  },
  {
    name: 'Crystal Bells',
    category: 'Music',
    icon: '🌟',
  },
  {
    name: 'Dream Synth',
    category: 'Music',
    icon: '🎹',
  },
  // Music Sounds
  {
    name: 'Piano Soft',
    category: 'Music',
    icon: '🎹',
  },
  {
    name: 'Guitar Ambient',
    category: 'Music',
    icon: '🎸',
  },
  {
    name: 'Flute',
    category: 'Music',
    icon: '🎼',
  },
  {
    name: 'Harp',
    category: 'Music',
    icon: '🎵',
  },
  {
    name: 'Space Music',
    category: 'Music',
    icon: '🎶',
  },
  // ASMR Sounds - Extended
  {
    name: 'Wood Carving',
    category: 'ASMR',
    icon: '🧸',
  },
  {
    name: 'Sand Drawing',
    category: 'ASMR',
    icon: '⏳',
  },
  {
    name: 'Soap Cutting',
    category: 'ASMR',
    icon: '🧼',
  },
  {
    name: 'Paint Mixing',
    category: 'ASMR',
    icon: '🎨',
  },
  {
    name: 'Tea Pouring',
    category: 'ASMR',
    icon: '🍵',
  },
  {
    name: 'Origami Paper',
    category: 'ASMR',
    icon: '📄',
  },
  {
    name: 'Glass Tapping',
    category: 'ASMR',
    icon: '🥃',
  },
  // ASMR Sounds
  {
    name: 'Page Turning',
    category: 'ASMR',
    icon: '📖',
  },
  {
    name: 'Writing',
    category: 'ASMR',
    icon: '✏️',
  },
  {
    name: 'Tapping',
    category: 'ASMR',
    icon: '👆',
  },
  {
    name: 'Brushing',
    category: 'ASMR',
    icon: '🖌️',
  },
  // Space Sounds - Extended
  {
    name: 'Galaxy Waves',
    category: 'Space',
    icon: '🌌',
  },
  {
    name: 'Nebula Hum',
    category: 'Space',
    icon: '🪐',
  },
  {
    name: 'Star Birth',
    category: 'Space',
    icon: '🌟',
  },
  {
    name: 'Black Hole',
    category: 'Space',
    icon: '⬤',
  },
  {
    name: 'Aurora Sound',
    category: 'Space',
    icon: '🎇',
  },
  {
    name: 'Meteor Shower',
    category: 'Space',
    icon: '🌠',
  },
  {
    name: 'Space Station',
    category: 'Space',
    icon: '🛰',
  },
  // Space Sounds
  {
    name: 'Space Wind',
    category: 'Space',
    icon: '🌠',
  },
  {
    name: 'Cosmic Noise',
    category: 'Space',
    icon: '🌌',
  },
  {
    name: 'Planet Waves',
    category: 'Space',
    icon: '🪐',
  },
];

export default function SoundsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedBackground, setSelectedBackground] = React.useState('/sounds-cards-images/pxfuel.jpg');
  const categories = ['All', 'Nature', 'Water', 'Weather', 'Ambient', 'Meditation', 'Music', 'ASMR', 'Space'];

  const filteredSounds = sounds.filter(sound => 
    selectedCategory === 'All' || sound.category === selectedCategory
  );

  return (
    <div className="min-h-screen p-8 relative">
      <div className="fixed inset-0 z-0">
        <Image
          src={selectedBackground}
          alt="Background"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10">
      <nav className="mb-12 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white hover:text-gray-300 transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 pb-12">
        {filteredSounds.map((sound, index) => (
          <motion.div 
            key={sound.name} 
            className={`relative rounded-xl overflow-hidden cursor-pointer group h-48`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => sound.image && setSelectedBackground(sound.image)}
          >
            {sound.image && (
              <Image
                src={sound.image}
                alt={sound.name}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <span className="text-2xl block mb-2">{sound.icon}</span>
              <span className="text-lg font-medium block text-white">{sound.name}</span>
              <span className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Click to play</span>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
