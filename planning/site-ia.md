# Site architecture and user flows 

## 1. Global Components

### `MainNav` 
The structural container for the site's navigation.
* **Placement:** Sticky at the top of the viewport (z-index: 50)
* **Layout:** Spans the width of the main content container.
* **Alignment:** Content is left-aligned inside
* **Persistence:** Visible on *all* pages

### `Nav` (Child of MainNav)
The functional navigation component styled like a terminal directory path/CLI style

* **Visual syntax:** `~ som.design / [ home | writing | about ]`
* **Interactivity:** 
    * `home` - Links to `/` or `/home`
    * `writing` - Links to `/writing`
    * `about` - Links to `/about` 
* **State:** The active nav item should 100% opacity, the inactive nav item should be at 30% opacity. Hovering on inactive nav items should bring them up to 100% opacity for the duration of the hover with a smooth animation.

### `Footer`
* **Placement:** Bottom of all pages
* **Content:** Copyright, minimal social links

* **Animation:** 
    * Click/tap: `scale(0.95)` with `150ms` ease transition
    * Opacity transitions: `200ms` ease
* **Typography:**
    * Font size: Body size (`text-base` / 16px)
    * Font weight: Medium (`font-medium` / 500)
    * Font family: Monospace (`font-mono`)

---

## 2. Page specs

### 2.1 Home page
* **Route:** `/` and `/home`
* **Structure:** 
    1. `MainNav` on top (as it is on all pages) with home as the active nav item within `Nav`
    2. **Header:** 
        * Intro copy (title + body) ("Grammar of software paragrpah")
        * Picture
    3. **Latest writing:** Called "New in writing" containing a list of the latest 4 articles from Writing page
    4. **Experience:** Professional timeline
    5. `Footer`

### 2.2 Writing page 
* **Route:** `/writing`
* **Structure:** 
    1. `MainNav` on top (as it is on all pages) with writing as the active nav item within `Nav`
    2. **Header:** 
        * Intro copy (title + body) 
        * Article list
            * Free floating list of titles
            * Vertical stack, left aligned, clean typography
    3. `Footer`

### 2.3 Article page 
* **Route:** `/writing/[slug]`
* **Structure:** 
    1. `MainNav` on top (as it is on all pages) with nothing selected as the active nav item within `Nav` - let users click on some link to go out of the article page
    2. **Article content:** 
        * Header (title+date+hero image)
        * Article body
    3. **Share/copy link section**
    4. `Footer`    

### 2.4 About page
* **Route:** `/about`
* **Structure:** 
    1. `MainNav` on top (as it is on all pages) with about as the active nav item within `Nav`
    2. **About content:** 
        * My bio (picture + content)
    3. `Footer`

## 3. Interaction flows

### Navigation logic
1. **User interface:** User sees the top nav bar and content. Top nav bar has 3 links in the Nav component - home, writing, about
2. **Routing:** 
    * Clicking `home` renders `/`
    * Clicking `writing` renders `/writing`
    * Clicking `about` renders `/about`

3. **Interaction feedback:** The cursor should likely change to a finger pointer while hovering over nav items inside `Nav`. The `~ som.design / ` prefix is always static, but can be linked to `/home` to act as a fallback—but it always will be 100% opacity and no hover state.


