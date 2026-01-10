import { useMemo } from "react";
import { samplePost } from "@/data/sample-post";
import { processBoldText } from "@/lib/processContent";

function Article() {
  // For now, show sample post for any slug
  // Will use slug to load different posts once MDX is set up
  const post = samplePost;

  const formattedDate = useMemo(() => {
    const date = new Date(post.date);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [post.date]);

  // Pre-process content blocks once to avoid regex on every render
  const processedContent = useMemo(() => {
    return post.content.map((block) => {
      if (block.type === "paragraph" && block.text) {
        return { ...block, processed: processBoldText(block.text) };
      }
      if (block.type === "list" && block.items) {
        return {
          ...block,
          processed: block.items.map((item) => processBoldText(item)),
        };
      }
      return block;
    });
  }, [post.content]);

  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-16 space-y-4">
          <h1 className="text-[28px] md:text-4xl font-semibold tracking-tight text-zinc-950 text-center w-[90%] mx-auto leading-tight">
            {post.title}
          </h1>
          <div className="text-center text-sm">
            <time className="font-mono text-zinc-500">{formattedDate}</time>
          </div>
        </header>

        {/* Hero Image */}
        {post.heroImage && (
          <div className="my-[60px]">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-[96%] h-auto mx-auto"
            />
          </div>
        )}

        {/* Content */}
        <div className="w-[95%] md:w-[90%] mx-auto">
          {processedContent.map((block, index) => {
            if (block.type === "paragraph" && "processed" in block) {
              return (
                <p
                  key={index}
                  className="text-base leading-[1.5] text-neutral-900 mb-5"
                >
                  {block.processed}
                </p>
              );
            }

            if (block.type === "h2" && block.text) {
              return (
                <h2
                  key={index}
                  className="text-xl font-semibold tracking-normal text-zinc-950 mt-10 mb-5 first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3" && block.text) {
              return (
                <h3
                  key={index}
                  className="text-base font-bold tracking-normal text-zinc-900 mt-10 mb-5"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "code" && block.text) {
              return (
                <pre
                  key={index}
                  className="bg-zinc-50 border border-zinc-200 rounded-sm p-4 text-[13px] font-mono text-zinc-800 overflow-x-auto mb-5"
                >
                  <code>{block.text}</code>
                </pre>
              );
            }

            if (block.type === "blockquote" && block.text) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-zinc-900 pl-4 py-2 mb-5 not-italic"
                >
                  <p className="text-base leading-[1.5] text-neutral-900">
                    {block.text}
                  </p>
                </blockquote>
              );
            }

            if (
              block.type === "list" &&
              "processed" in block &&
              Array.isArray(block.processed)
            ) {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside space-y-2 mb-5"
                >
                  {block.processed.map((item, i) => (
                    <li
                      key={i}
                      className="text-base leading-[1.5] text-neutral-900"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      </div>
    </article>
  );
}

export default Article;
