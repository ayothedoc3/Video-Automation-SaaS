import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm dark:border-gray-800 dark:bg-gray-950/95">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-white"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">VideoAI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {["Features", "Pricing", "Resources", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative group transition-colors hover:text-blue-600 text-gray-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <span>{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20">
              Sign In
            </Button>
            <Button variant="outline" size="sm" className="h-9 px-4 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 dark:border-blue-900 dark:text-blue-400 dark:hover:bg-blue-900/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M9 15l3 3 3-3" />
              </svg>
              Create Video
            </Button>
            <Button size="sm" className="h-9 px-4 bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
