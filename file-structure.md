# Site Architecture

├── Home (/)
│ ├── Hero Section (The "Manifesto" - short bio & philosophy)
│ ├── Experience Table (The "Proof" - Atlassian, past roles, years)
│ ├── Latest Writing (The "Signal" - Top 3 recent posts)
│ └── Footer (Social links: LinkedIn, Email)
│
├── Writing (/writing)
│ ├── 2026 Header
│ │ ├── Post Link (Date + Title)
│ │ └── Post Link
│ ├── 2025 Header
│ │ └── Post Link
│ └── ...
│
└── Article (/writing/[slug])
├── Header (Large Title, Monospace Date, Tags)
├── Content (The Essay/Note text)
└── Footer (Simple "Next Post" link)
