import Link from 'next/link'
import { BLOG_POSTS } from '@/app/_data/homepage'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogTeaser() {
  return (
    <section className="bg-secondary px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Resources
            </p>
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">
              From the blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden text-sm font-medium text-brand-primary underline-offset-4 hover:underline sm:block"
          >
            All posts →
          </Link>
        </div>

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
              <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-brand-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-auto text-xs font-medium text-brand-primary">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-6 block text-center text-sm font-medium text-brand-primary underline-offset-4 hover:underline sm:hidden"
        >
          All posts →
        </Link>
      </div>
    </section>
  )
}
