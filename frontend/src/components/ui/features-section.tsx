import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm shadow-sm dark:border-blue-800 dark:bg-blue-900/20">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Powerful Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Everything You Need for Video Creation
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed dark:text-gray-400">
              Our platform provides all the tools you need to create professional videos from start to finish
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="relative overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-blue-500/5 rounded-bl-3xl" />
            
            <CardHeader>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 dark:bg-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
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
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                >
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">Content Strategy</CardTitle>
              <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                AI-powered title generation and trend analysis for maximum impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 text-sm">
                {["Title generation with GPT-4/Gemini", "Trend analysis with platform APIs", "SEO optimization with SerpAPI"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group/item">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 group-hover/item:bg-blue-500/20 transition-colors">
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
                        className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Card 2 */}
          <Card className="relative overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/20 to-green-500/5 rounded-bl-3xl" />
            
            <CardHeader>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 dark:bg-green-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
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
                  className="h-7 w-7 text-green-600 dark:text-green-400"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">Script Production</CardTitle>
              <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                Generate engaging scripts with customizable tone and style
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 text-sm">
                {["AI script generation", "Customizable tone and style", "Automatic translation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group/item">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 dark:bg-green-500/20 group-hover/item:bg-green-500/20 transition-colors">
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
                        className="h-3.5 w-3.5 text-green-600 dark:text-green-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Card 3 */}
          <Card className="relative overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/20 to-orange-500/5 rounded-bl-3xl" />
            
            <CardHeader>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 dark:bg-orange-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
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
                  className="h-7 w-7 text-orange-600 dark:text-orange-400"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">Visual Assets</CardTitle>
              <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                Create stunning thumbnails and visuals with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 text-sm">
                {["AI thumbnail generation", "B-roll suggestion", "Brand consistency"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group/item">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 dark:bg-orange-500/20 group-hover/item:bg-orange-500/20 transition-colors">
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
                        className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional feature highlight */}
        <div className="mt-16 flex justify-center">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl p-1 max-w-4xl w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-blue-500/5 animate-pulse"></div>
            <div className="relative rounded-xl overflow-hidden p-6 bg-white dark:bg-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                    <span className="font-medium">New Feature</span>
                  </div>
                  <h3 className="text-2xl font-bold">AI-Powered Video Editing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our new AI video editor automatically cuts, transitions, and enhances your footage based on your script, saving hours of manual editing time.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
                      Try it now
                    </button>
                    <button className="inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3 aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-inner">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
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
                      className="h-12 w-12 text-blue-600/70 dark:text-blue-400/50"
                    >
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
