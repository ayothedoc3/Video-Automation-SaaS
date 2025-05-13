import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_450px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-6 animate-[fadeIn_0.7s_ease-in-out]">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <span className="mr-1 rounded-full bg-blue-600 w-2 h-2"></span>
              <span className="text-gray-700 dark:text-gray-300">Introducing Video Automation SaaS</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Automate Your Video Content Creation
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                From ideation to publication, streamline your video production workflow with AI-powered tools that save time and boost creativity.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2">
              <Button size="lg" className="h-12 px-8 bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
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
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-${i*100} flex items-center justify-center text-xs text-white font-medium`}>
                    {i === 4 ? '+' : ''}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">5,000+</span> content creators trust our platform
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center animate-[scaleIn_0.5s_cubic-bezier(0.16,1,0.3,1)]">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-2 shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
              <div className="absolute inset-1 rounded-xl overflow-hidden bg-gray-900/90 backdrop-blur">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer group">
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
                      className="h-10 w-10 text-white group-hover:scale-110 transition-transform"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-xs text-red-400">LIVE DEMO</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">AI-Powered Video Creation</h3>
                    <p className="text-sm text-gray-300">
                      See how our platform transforms content creation in minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
