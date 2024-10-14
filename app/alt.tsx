import { motion } from 'framer-motion'
import { ArrowRight, Github, Book, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>bacon.js - Svelte and React Interoperability</title>
        <meta name="description" content="bacon.js is the crispy library for seamless Svelte and React interoperability" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen relative">
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/bacon-background.jpg"
            alt="Bacon sizzling in a pan"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md}`}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/">
                <a className="text-2xl font-bold text-white">bacon.js</a>
              </Link>
              <div className="space-x-4">
                <Link href="#features"><a className="text-white hover:text-orange-300">Features</a></Link>
                <Link href="#demo"><a className="text-white hover:text-orange-300">Demo</a></Link>
                <Link href="#get-started"><a className="text-white hover:text-orange-300">Get Started</a></Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="relative z-10">
          <section className="min-h-screen flex items-center justify-center bg-black/30 text-white">
            <div className="text-center">
              <motion.h1
                className="text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Sizzle with bacon.js
              </motion.h1>
              <motion.p
                className="text-2xl mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The crispy library for seamless Svelte and React interoperability
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="#get-started" passHref>
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Seamless Integration", description: "Easily use Svelte components in React and vice versa" },
                  { title: "Performance Optimized", description: "Minimal overhead for maximum efficiency" },
                  { title: "Easy to Learn", description: "Intuitive API that feels natural in both frameworks" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="demo" className="py-20 bg-orange-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Interactive Demo</h2>
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Svelte Counter in React</CardTitle>
                  <CardDescription>This counter is a Svelte component rendered in React using bacon.js</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="text-4xl font-bold mb-4">What?</div>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Increment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="get-started" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Get Started</h2>
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                    <code>npm install bacon-js</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <footer className="bg-orange-800 text-white py-8 relative z-10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} bacon.js. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/docs"><a className="hover:text-orange-300"><Book /></a></Link>
              <Link href="https://github.com/bacon-js/bacon-js"><a className="hover:text-orange-300"><Github /></a></Link>
              <Link href="/community"><a className="hover:text-orange-300"><Users /></a></Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
