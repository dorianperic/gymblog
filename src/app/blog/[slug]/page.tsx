import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Metadata } from 'next';
import type { Document } from '@contentful/rich-text-types';
import Image from 'next/image';
import client from '../../../../lib/contentful';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

interface GymBlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    published: string;
    body?: Document;
    coverimage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Static Params
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const res = await client.getEntries({ content_type: 'gymBlog' });
  return (res.items as unknown as GymBlogPost[]).map((item) => ({
    slug: item.fields.slug,
  }));
}

// Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const res = await client.getEntries({
    content_type: 'gymBlog',
    'fields.slug': slug,
  });

  const post = res.items?.[0] as unknown as GymBlogPost | undefined;
  return {
    title: post?.fields?.title || 'Gym Blog',
  };
}

// Page Component
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: 'gymBlog',
    'fields.slug': slug,
  });

  const post = res.items?.[0] as unknown as GymBlogPost | undefined;
  if (!post) return notFound();

  const { title, body, coverimage, published } = post.fields;

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-3">{title}</h1>
        <p className="text-gray-500 text-sm">
          {new Date(published).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </header>

      {coverimage?.fields.file.url && (
        <div className="w-full aspect-[16/9] mb-10 relative rounded-xl overflow-hidden shadow-md bg-white">
          <Image
            src={`https:${coverimage.fields.file.url}`}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      )}

      <section className="prose prose-neutral lg:prose-xl max-w-none">
        {body ? documentToReactComponents(body) : null}
      </section>
    </article>
  );
}
