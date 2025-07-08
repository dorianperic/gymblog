import Link from "next/link";
import Image from "next/image";
import client from "../../../lib/contentful";
import blogHero from "../../../public/blog-hero.svg";

interface GymBlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    published: string;
    coverimage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export default async function BlogListPage() {
  const res = await client.getEntries({ content_type: "gymBlog" });

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center mb-12 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to the Fit{" "}
            <span className="text-red-500 ml-[-10px]">Zone</span> Blog
          </h1>
          <p className="text-xl text-gray-500">
            Discover workout tips, nutrition advice, and the latest trends in
            fitness from our expert contributors.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={blogHero} // or use another illustration
            alt="Fitness illustration"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {(res.items as unknown as GymBlogPost[]).map((post) => {
          const { title, slug, coverimage, published } = post.fields;

          return (
            <Link href={`/blog/${slug}`} key={post.sys.id}>
              <div className="border rounded-lg hover:shadow-md transition p-4">
                {coverimage?.fields?.file?.url && (
                  <div className="w-full h-48 relative mb-4 bg-white">
                    <Image
                      src={`https:${coverimage.fields.file.url}`}
                      alt={title}
                      fill
                      className="object-cover rounded"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-500 text-sm">
                  {new Date(published).toLocaleDateString()}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
