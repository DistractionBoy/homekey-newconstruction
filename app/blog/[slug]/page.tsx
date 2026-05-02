import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/app/_data/homepage'

type Props = {
  params: Promise<{ slug: string }>
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  const title = post ? `${post.title} | HomeKey Inspections` : 'Blog post | HomeKey Inspections'
  const description = post?.excerpt ?? 'Home inspection resources from HomeKey.'
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="px-7 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-3 text-2xl font-medium text-foreground">Post not found</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            This post doesn’t exist (yet).
          </p>
          <Link className="text-brand-primary hover:underline underline-offset-4" href="/blog">
            ← Back to blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="px-7 py-16">
      <article className="mx-auto max-w-2xl">
        <Link className="text-sm text-brand-primary hover:underline underline-offset-4" href="/blog">
          ← All posts
        </Link>
        <h1 className="mt-4 text-3xl font-medium leading-tight text-foreground md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-10 rounded-xl border border-border/50 bg-secondary p-5">
          <p className="text-sm font-medium text-foreground">Want to book an inspection?</p>
          <Link className="mt-1 inline-block text-sm text-brand-primary hover:underline underline-offset-4" href="/schedule">
            Schedule an inspection →
          </Link>
        </div>
      </article>
    </main>
  )
}

