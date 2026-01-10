import { createElement, ReactElement } from "react";

export function processBoldText(text: string): (string | ReactElement)[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return createElement(
        "strong",
        { key: i, className: "font-semibold text-zinc-900" },
        part
      );
    }
    return part;
  });
}

