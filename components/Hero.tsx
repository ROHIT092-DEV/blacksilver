'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden bg-white px-6">
      {/* Subtle animated background blur */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-40"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: '50%',
            top: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
          I Build{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Modern & Scalable
          </span>{' '}
          Websites for Your Business
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Helping startups, agencies, and entrepreneurs turn their ideas into
          elegant, high-performing websites that deliver results.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/get-started"
            className="px-8 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
          >
            Get Started 🚀
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-md border border-gray-400 text-gray-700 hover:text-black hover:border-black transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
