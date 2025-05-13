import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white/95 relative overflow-hidden dark:border-gray-800 dark:bg-gray-950/95">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 bg-gray-50 dark:bg-gray-900 opacity-30"></div>
      
      <div className="container flex flex-col gap-12 px-4 py-12 md:px-6 lg:py-20 relative z-10">
        {/* Newsletter section */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-8 md:p-10 border border-blue-200/10 shadow-lg dark:border-blue-800/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Stay Updated with VideoAI</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md">
                  Get the latest news, updates, and tips for video content creation delivered to your inbox.
                </p>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex h-12 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-800 dark:bg-gray-950"
                  />
                  <Button className="h-12 px-6 bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main footer links */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2 group">
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
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Automate your video content creation from ideation to publication with AI-powered tools.
            </p>
            <div className="flex gap-4 mt-2">
              {[
                { icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z", name: "Twitter" },
                { icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", name: "Facebook" },
                { icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01", name: "Instagram" },
                { icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", name: "LinkedIn" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-600 dark:hover:text-white"
                >
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
                    className="h-4 w-4"
                  >
                    <path d={social.icon} />
                  </svg>
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Integrations", "Changelog"]
            },
            {
              title: "Resources",
              links: ["Documentation", "Tutorials", "Blog", "Support"]
            },
            {
              title: "Company",
              links: ["About", "Careers", "Contact", "Partners"]
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Processing"]
            }
          ].map((column, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{column.title}</h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href="#" 
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} VideoAI. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
