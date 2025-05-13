import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 bg-gray-50 dark:bg-gray-900"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
          </div>
          
          <div className="relative px-8 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white shadow-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Limited time offer: 30% off all annual plans
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Ready to Transform Your <span className="relative inline-block">
                      <span className="relative z-10">Video Content?</span>
                      <span className="absolute bottom-2 left-0 w-full h-3 bg-white/20 rounded-full -z-0"></span>
                    </span>
                  </h2>
                  <p className="mx-auto max-w-[800px] text-white/90 text-lg md:text-xl lg:text-2xl">
                    Join thousands of creators using our platform to scale their content production and reach wider audiences
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
                  <Button size="lg" className="h-14 px-8 bg-white text-blue-600 hover:bg-white/90 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-0.5 text-base">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 border-white text-white hover:bg-white/10 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 transform hover:-translate-y-0.5 text-base">
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
                      className="mr-2 h-5 w-5"
                    >
                      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
                      <rect x="3" y="6" width="12" height="12" rx="2" ry="2" />
                    </svg>
                    Schedule Demo
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-8 w-full max-w-3xl">
                  {[
                    { text: "No credit card required", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { text: "14-day free trial", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { text: "Cancel anytime", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-white">
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
                        className="h-5 w-5 flex-shrink-0"
                      >
                        <path d={item.icon} />
                      </svg>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 flex items-center gap-2 text-white/80">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-blue-600 bg-white/20 flex items-center justify-center text-xs font-medium overflow-hidden`}>
                        {i === 5 ? '+' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-white">5,000+</span> creators joined in the last month
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
