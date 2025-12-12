import { MainShell } from "@/components/layout/main-shell"
import { Chip } from "@/components/ui/chip"
import { AnimatedButton } from "@/components/ui/animated-button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = {
    title: "Top SEO Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging SEO strategies that are reshaping search rankings.",
    category: "SEO",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "/seo-analytics-dashboard.png",
    author: {
      name: "Sarah Johnson",
      role: "SEO Director",
      avatar: "/professional-woman-diverse.png",
    },
  }

  const relatedPosts = [
    {
      slug: "local-seo-strategies",
      title: "Local SEO: Complete Guide for 2025",
      category: "SEO",
      image: "/local-business-map.png",
    },
    {
      slug: "technical-seo-checklist",
      title: "Technical SEO Checklist",
      category: "SEO",
      image: "/website-code.png",
    },
  ]

  return (
    <MainShell>
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <Chip variant="primary" className="mb-4">
            {post.category}
          </Chip>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-12 border border-border">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SEO continues to evolve at a rapid pace, with search engines becoming increasingly sophisticated in
            understanding user intent and content quality. In 2025, staying ahead means adapting to new technologies,
            user behaviors, and algorithm updates.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Key Trends</h2>
          <h3 className="text-xl font-semibold text-foreground mb-3">1. AI-Powered Search</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Artificial intelligence is transforming how search engines interpret queries and rank content. Understanding
            AI-driven search features and optimizing for them is crucial for maintaining visibility.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">2. E-E-A-T Emphasis</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) have become central to Google's
            ranking algorithms. Building genuine authority and demonstrating expertise is more important than ever.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">3. Voice & Visual Search</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Voice search and visual search technologies are reshaping how users discover content. Optimizing for natural
            language queries and image recognition is becoming essential.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The SEO landscape of 2025 demands a holistic approach that combines technical excellence, quality content,
            and user experience. By staying informed and adapting to these trends, businesses can maintain their
            competitive edge in search rankings.
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card/50 mb-12">
          <img
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h4 className="text-lg font-semibold text-foreground">{post.author.name}</h4>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-cyan-500/5 mb-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Boost Your SEO?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our SEO strategies can help your business achieve better rankings and drive qualified
            traffic.
          </p>
          <AnimatedButton href="/contact" variant="primary">
            Book a Free Consultation
          </AnimatedButton>
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Chip variant="secondary" className="mb-3">
                    {relatedPost.category}
                  </Chip>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h4>
                  <span className="inline-flex items-center gap-2 text-sm text-primary mt-3 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </MainShell>
  )
}
