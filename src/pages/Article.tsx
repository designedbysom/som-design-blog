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
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <time className="font-mono text-zinc-400">{formattedDate}</time>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-zinc-400 border border-zinc-200 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-8 sm:space-y-12">
          {processedContent.map((block, index) => {
            if (block.type === "paragraph" && "processed" in block) {
              return (
                <p
                  key={index}
                  className="text-base leading-relaxed text-zinc-600"
                >
                  {block.processed}
                </p>
              );
            }

            if (block.type === "h2" && block.text) {
              return (
                <h2
                  key={index}
                  className="text-xl font-medium tracking-tight text-zinc-950 mt-16 first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3" && block.text) {
              return (
                <h3
                  key={index}
                  className="text-base font-medium tracking-tight text-zinc-900 mt-12"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "code" && block.text) {
              return (
                <pre
                  key={index}
                  className="bg-zinc-50 border border-zinc-200 rounded-sm p-4 text-[13px] font-mono text-zinc-800 overflow-x-auto"
                >
                  <code>{block.text}</code>
                </pre>
              );
            }

            if (block.type === "blockquote" && block.text) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-zinc-900 pl-4 py-2 my-8 not-italic"
                >
                  <p className="text-base leading-relaxed text-zinc-600">
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
                <ul key={index} className="list-disc list-inside space-y-2">
                  {block.processed.map((item, i) => (
                    <li
                      key={i}
                      className="text-base leading-relaxed text-zinc-600"
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
