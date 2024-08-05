import { Link, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion'

function Music2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="18" r="4" />
            <path d="M12 18V2l7 4" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}

const Landing = () => {
    const [isSearch, setIsSearch] = useState(false)
    return (
        <div className="flex w-full overflow-hidden flex-col">
            <header className="fixed w-full top-0 z-40 border-b bg-background/80 backdrop-blur-md">
                <div className="flex h-16 items-center justify-between px-4 md:px-6">
                    <Link to="/" className="flex items-center gap-2">
                        <Music2Icon className="h-6 w-6 text-primary" />
                        <span className="font-bold tracking-tight">Musical</span>
                    </Link>
                    <nav className="hidden gap-8 md:flex">
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Browse
                        </Link>
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Search
                        </Link>
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Your Library
                        </Link>
                    </nav>
                    <div className="flex items-center gap-8">
                        <motion.input
                            initial={{ opacity: 0, width: '0%' }}
                            animate={{ opacity: isSearch ? 1 : 0, width: isSearch ? '100%' : '0%', originY: '100%' }}
                            transition={{ duration: .2 }}
                            placeholder='Search'
                            className='bg-transparent outline-none border-border border-2 rounded-2xl p-2 text-xs' />
                        <div className='ml-auto flex gap-8'>
                            <button onClick={() => setIsSearch(!isSearch)} variant="ghost" size="icon">
                                <SearchIcon className="h-5 w-5" />
                                <span className="sr-only">Search</span>
                            </button>
                            <button variant="ghost" size="icon">
                                <UserIcon className="h-5 w-5" />
                                <span className="sr-only">Profile</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex flex-col w-full">
                <section className="relative h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-foreground">
                    <div className=" w-full flex flex-col items-center justify-center gap-6 py-24 px-4 text-center md:py-32">
                        <h1 className="heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Discover the best music
                        </h1>
                        <p className="subheading max-w-[700px] text-lg text-primary-foreground/80 md:text-xl">
                            Immerse yourself in a world of endless musical possibilities with our powerful music streaming app.
                        </p>
                        <div className="flex gap-4">
                            <button size="lg" className='bg-[#d5b990] subheading pl-8 pr-8 p-2'>Get Started</button>
                            <button variant="outline" size="lg" className='bg-background subheading pl-8 pr-8'>
                                Learn More
                            </button>
                        </div>
                        <div className="absolute inset-0 -z-10 opacity-10">
                            <img
                                src="/placeholder.svg"
                                width={1920}
                                height={1080}
                                alt="Background"
                                className="h-full w-full object-cover"
                                style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </section>
                <div className="py-12 flex justify-center md:py-24">
                    <div className=" w-full grid gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
                        <div className="flex flex-col items-start gap-4">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Unlock your musical <br></br> journey
                            </h2>
                            <p className="subheading text-muted-foreground md:text-xl">
                                Discover new music, create playlists, and explore a vast library of songs with our intuitive and
                                powerful app.
                            </p>
                            <div className="flex gap-4 subheading">
                                <button className='bg-[#d5b990] p-2'>Explore Features</button>
                                <button variant="outline" className='border-2 border-border p-2'>Learn More</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    1
                                </div>
                                <h3 className="heading mt-4 text-lg font-bold">Music Playback</h3>
                                <p className="text-sm text-muted-foreground">
                                    Enjoy seamless music playback with our powerful audio engine.
                                </p>
                            </div>
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    2
                                </div>
                                <h3 className="heading mt-4 text-lg font-bold">Playlists</h3>
                                <p className="text-sm text-muted-foreground">Create and manage your own personalized playlists.</p>
                            </div>
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    3
                                </div>
                                <h3 className="heading mt-4 text-lg font-bold">Search</h3>
                                <p className="text-sm text-muted-foreground">
                                    Discover new music with our powerful search functionality.
                                </p>
                            </div>
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    4
                                </div>
                                <h3 className="heading mt-4 text-lg font-bold">Recommendations</h3>
                                <p className="text-sm text-muted-foreground">
                                    Get personalized music recommendations based on your tastes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-12 flex justify-center md:py-24 bg-muted">
                    <div className=" grid gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-background p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    1
                                </div>
                                <h3 className="mt-4 text-lg font-bold">Offline Mode</h3>
                                <p className="text-sm text-muted-foreground">Listen to your favorite music even when you're offline.</p>
                            </div>
                            <div className="rounded-lg bg-background p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    2
                                </div>
                                <h3 className="mt-4 text-lg font-bold">High-Quality Audio</h3>
                                <p className="text-sm text-muted-foreground">Enjoy your music in stunning high-definition audio.</p>
                            </div>
                            <div className="rounded-lg bg-background p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    3
                                </div>
                                <h3 className="mt-4 text-lg font-bold">Personalization</h3>
                                <p className="text-sm text-muted-foreground">Customize your experience with personalized settings.</p>
                            </div>
                            <div className="rounded-lg bg-background p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                                    4
                                </div>
                                <h3 className="mt-4 text-lg font-bold">Cross-Device Sync</h3>
                                <p className="text-sm text-muted-foreground">Access your music from any device, anywhere.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Premium Features</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unlock the full potential</h2>
                            <p className="subheading text-muted-foreground md:text-xl">
                                Upgrade to our premium plan and enjoy unlimited access to our entire music library, ad-free listening,
                                and more.
                            </p>
                            <div className="flex gap-4 subheading">
                                <button className='bg-[#d5b990] p-2'>Upgrade to Premium</button>
                                <button variant="outline" className='border bg-background p-2 border-border'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 flex justify-center md:py-24">
                    <div className=" grid gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
                        <div className="flex flex-col items-start gap-4">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Discover</div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Explore our vast music library
                            </h2>
                            <p className="text-muted-foreground md:text-xl">
                                Dive into our curated playlists, trending albums, and personalized recommendations to find your new
                                favorite tunes.
                            </p>
                            <div className="flex gap-4">
                                <button className='bg-[#d5b990] p-2'>Browse Music</button>
                                <button variant="outline" className='border-2 border-border p-2'>Learn More</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <img
                                    src={"https://i.scdn.co/image/ab67706f000000029181e9d3e260f4efd78c3482"}
                                    width={300}
                                    height={300}
                                    alt="Album Cover"
                                    className="h-32 w-32 rounded-lg object-cover"
                                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                                />
                                <h3 className="mt-4 text-lg font-bold">Trending Albums</h3>
                                <p className="text-sm text-muted-foreground">Discover the latest and greatest albums.</p>
                            </div>
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <img
                                    src="https://i.scdn.co/image/ab67706f00000002bd0151f6679805870586c227"
                                    width={300}
                                    height={300}
                                    alt="Playlist Cover"
                                    className="h-32 w-32 rounded-lg object-cover"
                                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                                />
                                <h3 className="mt-4 text-lg font-bold">Curated Playlists</h3>
                                <p className="text-sm text-muted-foreground">Explore our expertly curated playlists.</p>
                            </div>
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <img
                                    src="https://i.scdn.co/image/ab67656300005f1f2018e80a39858621be3e4120"
                                    width={300}
                                    height={300}
                                    alt="Recommendations"
                                    className="h-32 w-32 rounded-lg object-cover"
                                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                                />
                                <h3 className="mt-4 text-lg font-bold">Recommendations</h3>
                                <p className="text-sm text-muted-foreground">Get personalized music recommendations.</p>
                            </div>
                            <div className="rounded-lg bg-muted p-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                                <img
                                    src="https://i.scdn.co/image/ab67706f00000002f7e4e7042bb034207862cb18"
                                    width={300}
                                    height={300}
                                    alt="Genres"
                                    className="h-32 w-32 rounded-lg object-cover"
                                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                                />
                                <h3 className="mt-4 text-lg font-bold">Genres</h3>
                                <p className="text-sm text-muted-foreground">Explore a wide range of musical genres.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-muted py-6">
                <div className=" flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                    <div className="flex items-center gap-2">
                        <Music2Icon className="h-6 w-6 text-primary" />
                        <span className="font-bold tracking-tight">Musical</span>
                    </div>
                    <nav className="flex gap-4">
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Browse
                        </Link>
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Search
                        </Link>
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Your Library
                        </Link>
                    </nav>
                    <div className="text-sm text-muted-foreground">&copy; 2024 Musical. All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}

export default Landing

