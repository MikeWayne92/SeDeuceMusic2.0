import React, { useState, useEffect } from 'react';
import { Play, Pause, ShoppingBag, Calendar, Instagram, Twitter, Music2, Disc3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuroraBackground } from './components/AuroraBackground';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  const upcomingTours = [
    { date: 'Mar 28', location: 'Los Angeles, CA', venue: 'The Wiltern' },
    { date: 'Apr 15', location: 'New York, NY', venue: 'Apollo Theater' },
    { date: 'May 02', location: 'Atlanta, GA', venue: 'Tabernacle' },
  ];

  const tracks = [
    { title: 'Midnight Dreams', duration: '3:45' },
    { title: 'Urban Symphony', duration: '4:12' },
    { title: 'Soul Connection', duration: '3:58' },
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setActiveTrack((prev) => (prev + 1) % tracks.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  const merchandise = [
    { name: 'Tour Hoodie', price: 59.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80' },
    { name: 'Vinyl Collection', price: 34.99, image: 'https://images.unsplash.com/photo-1619123707367-bb5be603f00f?auto=format&fit=crop&q=80' },
    { name: 'Limited Tee', price: 29.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white overflow-x-hidden">
      {/* Floating Music Player */}
      <AnimatePresence>
        {showMusicPlayer && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black bg-opacity-90 p-4 rounded-xl backdrop-blur-lg border border-purple-500 w-11/12 max-w-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Disc3 className="text-purple-400" />
                </motion.div>
                <div>
                  <p className="font-bold">{tracks[activeTrack].title}</p>
                  <p className="text-sm text-purple-400">{tracks[activeTrack].duration}</p>
                </div>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <AuroraBackground className="from-purple-900 via-blue-900 to-black text-white">
        <div className="relative z-10 text-center p-4">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Se deuce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-purple-300"
          >
            Soulful Rhythms. Urban Beats.
          </motion.p>
          <motion.button 
            className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center mx-auto group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsPlaying(!isPlaying);
              setShowMusicPlayer(true);
            }}
          >
            <motion.div
              animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
            >
              {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
            </motion.div>
            Listen Now
          </motion.button>
        </div>
      </AuroraBackground>

      {/* Latest Release */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Latest Release
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4"
              >
                Midnight Soul
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                Experience the latest album featuring 12 tracks of pure R&B magic. A journey through love, life, and soul.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-900 px-6 py-2 rounded-full hover:bg-purple-100 transition flex items-center space-x-2"
              >
                <Music2 size={20} />
                <span>Stream Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tour Dates */}
      <section className="py-20 px-4 md:px-8 bg-black bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Tour Dates
          </motion.h2>
          <div className="space-y-6">
            {upcomingTours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg"
              >
                <div>
                  <p className="text-xl font-bold">{tour.date}</p>
                  <p className="text-gray-300">{tour.location}</p>
                  <p className="text-purple-300">{tour.venue}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full flex items-center"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Get Tickets
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Official Merch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchandise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-4 group"
              >
                <motion.div
                  className="aspect-square rounded-lg mb-4 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-300 mb-4">${item.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-full flex items-center justify-center group"
                >
                  <ShoppingBag className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="hover:text-purple-400"
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="hover:text-purple-400"
            >
              <Twitter />
            </motion.a>
          </motion.div>
          <p className="text-gray-400">&copy; 2024 Se deuce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;