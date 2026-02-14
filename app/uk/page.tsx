"use client"

import Link from "next/link"

export default function UKPage() {
  return (
    <>
      <style jsx global>{`
        .hero-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(0, 208, 231, 0.08) 0%, rgba(4, 17, 24, 1) 70%);
        }
        .grid-pattern {
          background-image: linear-gradient(rgba(0, 208, 231, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 208, 231, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .bg-background-dark {
          background-color: #041118;
        }
        .bg-charcoal {
          background-color: #0f2123;
        }
        .bg-navy-deep {
          background-color: #081a21;
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="relative hero-gradient pt-24 pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-primary/40 blur-sm rounded-full"></div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Nationwide Coverage</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Digital Marketing Services Across the <span className="text-primary">United Kingdom</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              We help businesses across major UK cities grow through web development, SEO, and performance-driven
              advertising. Data-led strategies for a digital-first economy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-bold rounded-lg hover:scale-105 transition-transform"
              >
                Get Started
              </Link>
              <Link
                href="/#services"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-white/5 font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Major Cities Grid */}
        <section className="py-24 px-6 bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Major Cities We Serve</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
              <p className="text-white/40 max-w-md">
                Our specialized teams deliver hyper-local marketing strategies tailored to the unique economic landscape
                of Britain's key metropolitan areas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* City Cards */}
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBN6__DLAxepkYgNMiPAE_-DaopGZh_Vgy4PsnE42eCkf4kFyqQadV0IJSgVCGZEzXoJV_BmueBMffDiNk58io9n2cdkG3nyWLdMO3bUU3JwVrpqWoIhbd88JMiX5_Cl91cH1Eu3bk6eOe1dt1FdPC2bJNCH2xlxAiLlzisstCDvaspQ8UK27of6U0dduW4PfbSw6XOB4jPhHw3WKCxfs3-g9bUY-vYsgkN02UeV2BblLycnRe99-uyEOnAxxSOe7pgFMsEfOuW5Vw"
                alt="Aerial view of London cityscape at dusk"
                city="London"
                description="Strategic digital growth in the capital's competitive market."
                href="/uk/london"
              />
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBmAcrwxRhTnvtaD5-GD-12iPvWnq3kCAnpy39h3yLoBMoY6GVLhudCK-ucMDmgZX_SuIwwhU97G1ZZR2PfD44rMtame2DFMhvLBfL2vl5e427L2DZP-O4eKK5p1nnR2yjzxoJatH-ov6BcGWvrUFK8FrUI7Ag9XjbxrwemWWqtit-BbFi6Y5Ulevezfp32Nz1SVwTdKODZne7jGP1dpnXThtXGhpktictRkxbVV_YLzVc8o1jXxJvW5XD86B2IZy2jux5iVpa6QBY"
                alt="Manchester city centre with modern architecture"
                city="Manchester"
                description="Dominating the Northern Powerhouse with tech-led SEO."
              />
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAzHzyT5ATOOUjOXBiDMwReAXk7WaPlVHOic368vlNjLJXJ4AYI8F_g1LJYWB8JUya3azdjynGC8zCPu-ihw_hC8SEGv2E7w9Fdxt4pCum1kQi2bCYqPfn27b-ZFyAAqr5ctEyCUqk5mMBWfeLiI9fN4_rfa9KWU6TqJIuVfNMOqjbJlb-p560brRtlPTe-X66UR6-k2YqWOQ_bBCj2U5u51JbtK0SCQtEkuOtbziUi817POdbhrD1zjq-RJesXaFbWO3WZyUpqGkQ"
                alt="Birmingham city skyline and library"
                city="Birmingham"
                description="Innovation and enterprise solutions in the West Midlands."
              />
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQg0W8DIbZwfvWJDcOZCiogZ-GMzMfiFOQzwA4Xn-8HzcrIMFZc7fW2_DeZokqMEv2yspjPwDGJHMsvXwic-jmFV0z5zLpufSXpRo-aD9yyScLNqMtBpZB4kj2nciz7UqDrYT39AuGYxEHqEQfja6zbvj2J-AEomnjohLZZpL1USNpakHmgobgURNjhdpZmLD1sP9n_ASjt3srAjsYF222zXSyMXIt5Ucf0ncv34k3jcgc_d6jx9qyIv5r9AntYEVwBPyDuqEiUQ"
                alt="Liverpool waterfront and Albert Dock"
                city="Liverpool"
                description="Performance marketing for Merseyside's growing businesses."
              />
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmsA0W-BKdTBxQwFWj9T_mmYCJLLrI0eecTDDjHe8Hm-lJ6wCrvIk-RC7oVmKgPhHcPFNTM4n1s5WgxIB85JXKCfZ7GSCR99oDetltbfzo4_dU2F4K6KvMZstc6TfJdPKYPw0yC1XG5XiOEc-anu2VWrz5mAoOOQ4wtZecXRiMDdz7LLwDJRmfkPgYdJJf7KjgXyNg6XTI_OJvGKNc1N27fKI0JXbihlilIkcGifxzPKzOr2Snf3lSEjk7bigaJo9fnNmT99Xv6Cs"
                alt="Leeds city centre skyline view"
                city="Leeds"
                description="Data-driven marketing and web dev for Yorkshire."
              />
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDKTUoFj6zHyxNOFTaDqvNgcd4-xcBEIPf3GD5smK6mlwhfF12ZeF7jgu64XBF_60nrwWvzvoTTZJfefM1JgNFXuIJ8dVI1SChR_EZdWN8jGaXVwDDjiPlNpnWFTCeW9kTNHHjCKQHz0YC9iA2ABNEkZ8zN1Pxvr7wbHK9hP8AyZd7rNg7aT7eHdVv06zBYEF-D8KGnaM4f1zdU9mIa3gH4FAEqaO-DZzszi0M-sc2tiMQYLR61iXgXYnRmlC-Z2fme6HFSmd3s7sg"
                alt="Glasgow city centre architecture"
                city="Glasgow"
                description="Scaling digital footprints in Scotland's biggest city."
              />
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAi-nNmErR0VZJbbS_0mg5jYmyyxkuBeEdkm7tYSGrypleSRWoh4Zh_0OOhN0qZ1E3JkAJSjLYkYTOshJEj4CH6MIWwzvNJqmG8KPC_zmtXt6BFJTRAQ7kRvG1v2kbv-Lvaz321v_nZqcYRpPMJc2a-JbSoIU0ej8q6kZ4qN8Mvdhmsvx_p6fhTKQ0dj3PLFmyfvS4XLkRKN4QCdUUAHc8Jthv6d5GbDaqZVOBMf6vgnJPxNKaSWlMghq6QnKCJ_GvQ8l8TDIXWz3g"
                alt="Edinburgh Castle overlooking the city"
                city="Edinburgh"
                description="Premium digital solutions in the historic capital."
              />
              <CityCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDR3TnfskCwaIa-nkOCUYieU7JNCIBVn47y4setuZ6wWjij182ayfg5p8olENtrzOTPEIKSiPG9UUOOKFgQqioDIXB8TMVifdAInxe-GedgdI6c5TPpZGTmzMcWAZG_XfKMw6V0s9_R_TE1C1nYLn0kkWB1BZMnRR_n9YYSCCqJzAiC3TuZwvitlEkcG2SBg7jXc6We9BUZZa_VK_FZx3xqRlobu1lDw4fsi1Hx1hYr1-gA1h6N6c_VZ8OwI7EfmemjPQ-iCd1jhw0"
                alt="Bristol suspension bridge and river"
                city="Bristol"
                description="Creative tech strategies for the South West hub."
              />
            </div>

            {/* Additional Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <SimpleCityCard city="Sheffield" description="Precision-targeted growth for South Yorkshire." />
              <SimpleCityCard city="Newcastle" description="Marketing leadership in the North East corridor." />
              <SimpleCityCard city="Cardiff" description="Leading digital agency services in Wales." />
              <SimpleCityCard city="Belfast" description="Advanced strategies for Northern Ireland." />
            </div>
          </div>
        </section>

        {/* UK Regions */}
        <section className="py-24 px-6 border-t border-white/5 bg-charcoal/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">UK Regions Coverage</h2>
              <p className="text-white/40">Broad regional expertise spanning the length and breadth of the UK.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Greater London",
                "South East England",
                "West Midlands",
                "North West England",
                "Yorkshire",
                "Scotland",
                "Wales",
                "Northern Ireland",
              ].map((region) => (
                <div
                  key={region}
                  className="py-10 px-6 rounded-xl bg-background-dark border border-white/5 text-center hover:bg-primary/5 hover:border-primary/30 transition-all"
                >
                  <p className="font-semibold text-lg">{region}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 px-6 bg-background-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Industries We Support Across the UK</h2>
              <p className="text-white/40 max-w-2xl mx-auto">
                From high-street giants to ambitious startups, we provide sector-specific digital growth frameworks.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <IndustryCard icon="⚖️" title="Law Firms" description="Compliance-first lead generation." />
              <IndustryCard icon="🏥" title="Healthcare" description="Patient-focused digital outreach." />
              <IndustryCard icon="🏦" title="Finance" description="Authoritative Fintech & Banking SEO." />
              <IndustryCard icon="🏗️" title="Construction" description="B2B infrastructure marketing." />
              <IndustryCard icon="🛍️" title="eCommerce" description="Direct-to-consumer growth." />
              <IndustryCard icon="🏠" title="Real Estate" description="High-intent property lead acquisition." />
              <IndustryCard icon="🍽️" title="Hospitality" description="Local booking & awareness campaigns." />
              <IndustryCard icon="🚀" title="Tech Startups" description="Agile scaling for innovators." />
              <IndustryCard icon="🏪" title="Local Services" description="Multi-location visibility optimization." />
            </div>
          </div>
        </section>

        {/* Business Districts */}
        <section className="py-24 px-6 bg-charcoal/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight">
                Key Commercial & <br />
                <span className="text-primary">Business Areas</span>
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Our presence extends into the most vital economic hubs of the country. We understand the specific
                digital demands of high-traffic commercial districts.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "The City of London",
                  "Canary Wharf",
                  "MediaCityUK",
                  "Spinningfields",
                  "Edinburgh New Town",
                  "Cardiff Bay",
                  "Titanic Quarter",
                  "Salford Quays",
                ].map((area) => (
                  <li key={area} className="flex items-center gap-3 text-white/80 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary"></span> {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-48 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20"></div>
              <div className="h-48 rounded-xl bg-gradient-to-bl from-cyan-500/10 to-transparent border border-primary/10 mt-8"></div>
              <div className="h-48 rounded-xl bg-gradient-to-tr from-cyan-400/10 to-transparent border border-primary/10 -mt-8"></div>
              <div className="h-48 rounded-xl bg-gradient-to-tl from-primary/15 to-transparent border border-primary/15"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-background-dark relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Dominate Your <span className="text-primary">Local Market?</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Whether you're in London, Edinburgh, or Cardiff - we bring enterprise-grade digital marketing to your
              doorstep.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-primary text-background-dark font-bold rounded-lg hover:scale-105 transition-transform text-lg"
            >
              Start Your Growth Journey
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

// Component helpers
function CityCard({
  image,
  alt,
  city,
  description,
  href,
}: {
  image: string
  alt: string
  city: string
  description: string
  href?: string
}) {
  const content = (
    <>
      <div className="w-full h-40 rounded-lg overflow-hidden mb-4 bg-charcoal">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          alt={alt}
          src={image}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{city}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </>
  )

  if (href) {
    return (
      <Link href={href} className="group p-6 rounded-xl border border-white/5 bg-navy-deep hover:border-primary/50 transition-all cursor-pointer block">
        {content}
      </Link>
    )
  }

  return (
    <div className="group p-6 rounded-xl border border-white/5 bg-navy-deep hover:border-primary/50 transition-all cursor-default">
      {content}
    </div>
  )
}

function SimpleCityCard({ city, description }: { city: string; description: string }) {
  return (
    <div className="group p-6 rounded-xl border border-white/5 bg-navy-deep hover:border-primary/50 transition-all cursor-default">
      <h3 className="text-xl font-bold mb-2">{city}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </div>
  )
}

function IndustryCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-navy-deep/50 border border-white/5">
      <span className="text-primary text-4xl">{icon}</span>
      <div>
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-sm text-white/40">{description}</p>
      </div>
    </div>
  )
}
