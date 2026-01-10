export const samplePost = {
  slug: "sample-blog-post",
  title:
    "Building Design Systems That Scale Beyond Daily Use To Become Platforms",
  date: "2026-01-07",
  tags: ["Design Systems", "Engineering", "Product Strategy"],
  content: [
    {
      type: "paragraph",
      text: "At the intersection of design and engineering, design systems represent more than a collection of components—they are the architectural foundation of product development. This essay explores the principles that make design systems truly scalable.",
    },
    {
      type: "h2",
      text: "The Foundation: Atomic Thinking",
    },
    {
      type: "paragraph",
      text: "The atomic design methodology provides a mental model for constructing interfaces. Start with atoms—buttons, inputs, labels. Combine them into molecules—search forms, navigation items. Assemble molecules into organisms—headers, content sections. This hierarchy creates a predictable structure.",
    },
    {
      type: "h3",
      text: "Component Composition",
    },
    {
      type: "paragraph",
      text: "Effective design systems prioritize composition over configuration. Instead of creating a button with fifty props, build smaller, composable pieces:",
    },
    {
      type: "code",
      text: `<Button variant="primary" size="medium">
  <Icon name="arrow-right" />
  <Text>Continue</Text>
</Button>`,
    },
    {
      type: "paragraph",
      text: "This approach reduces complexity while maintaining flexibility.",
    },
    {
      type: "h2",
      text: "Documentation as Infrastructure",
    },
    {
      type: "paragraph",
      text: "A design system without documentation is merely a codebase. Documentation serves multiple purposes:",
    },
    {
      type: "list",
      items: [
        "**Onboarding**: New team members understand patterns quickly",
        "**Decision Making**: Clear guidelines prevent design drift",
        "**Maintenance**: Future changes have context",
      ],
    },
    {
      type: "paragraph",
      text: "Documentation should live alongside code, not in separate tools. When a component changes, its documentation updates automatically.",
    },
    {
      type: "h2",
      text: "The Human Element",
    },
    {
      type: "paragraph",
      text: "Technical excellence means nothing if the system isn't adopted. Design systems succeed when they solve real problems for real people. Listen to your team's pain points. Build what they need, not what you think they should want.",
    },
    {
      type: "blockquote",
      text: "The best design system is the one your team actually uses. Everything else is academic.",
    },
    {
      type: "paragraph",
      text: "Measure adoption through usage metrics, not component counts. A small, well-used system beats a large, ignored one.",
    },
    {
      type: "h2",
      text: "Looking Forward",
    },
    {
      type: "paragraph",
      text: "Design systems evolve. What works today may not work tomorrow. Build with change in mind. Create extension points. Design for the unknown.",
    },
    {
      type: "paragraph",
      text: "The craft of building design systems requires equal parts design sensibility and engineering rigor. It's this combination that separates good systems from great ones.",
    },
  ],
};
