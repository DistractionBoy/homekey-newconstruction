import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/app/_data/homepage'

export const metadata: Metadata = {
  title: 'Blog | HomeKey Inspections',
  description: 'Home inspection resources from HomeKey.',
  alternates: { canonical: '/blog' },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogIndexPage() {
  return (
    <main className="px-7 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
          Resources
        </p>
        <h1 className="mb-8 text-3xl font-medium text-foreground md:text-4xl">
          Blog
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
            >
              <p className="text-[10px] text-muted-foreground">
                {formatDate(post.date)} · {post.readTime}
              </p>
              <h2 className="text-sm font-semibold leading-snug text-foreground group-hover:text-brand-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-auto text-xs font-medium text-brand-primary">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

