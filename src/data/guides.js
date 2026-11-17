// Helpful articles. Each one becomes a page at /guides/<slug>. Add a guide by adding an object to this array.
// Section fields: h (heading), p (paragraphs), list (bullet points), tip (highlighted note). All optional except h.
export const guides = [
  {
    slug: 'speed-up-slow-wordpress-website',
    title: 'How to speed up a slow WordPress website: a practical checklist',
    seoTitle: 'How to Speed Up a Slow WordPress Website (Checklist)',
    desc: 'A step-by-step checklist to find what is slowing your WordPress site and fix it, from images and caching to plugins, hosting and Core Web Vitals.',
    date: '2026-11-17', tag: 'Speed', services: ['speed-and-core-web-vitals-optimization', 'hosting-setup-and-management', 'website-audit'],
    intro: 'A slow website quietly costs you customers. Visitors on mobile data give up on pages that take too long, and Google uses page experience as a ranking signal. The good news: most WordPress sites can be made much faster without a rebuild. Work through this checklist in order, because the early steps usually bring the biggest gains.',
    sections: [
      { h: 'Measure before you change anything', p: ['Run your homepage and your most important inner page through Google PageSpeed Insights. Note the mobile score and, more importantly, the three Core Web Vitals in the field data section if your site has enough traffic to show it.'],
        list: ['LCP (Largest Contentful Paint): how quickly the main content appears. Aim for 2.5 seconds or less.', 'INP (Interaction to Next Paint): how quickly the page reacts to taps and clicks. Aim for 200 milliseconds or less.', 'CLS (Cumulative Layout Shift): how much the layout jumps while loading. Aim for 0.1 or less.'],
        tip: 'Save a screenshot of the results. Without a baseline you cannot tell which change helped.' },
      { h: 'Fix your images first', p: ['Oversized images are the most common cause of slow WordPress pages. A photo straight from a phone camera can be several megabytes when it only needs to be a few hundred kilobytes.'],
        list: ['Resize images to the largest size they actually display at.', 'Serve modern formats such as WebP or AVIF.', 'Lazy-load images below the fold, but never the main hero image.', 'Always set width and height so the layout does not jump (this helps CLS).'] },
      { h: 'Turn on page caching and a CDN', p: ['Without caching, WordPress builds every page from the database on every visit. A caching plugin, or caching built into your host, saves a ready-made copy and serves it instantly. A CDN such as Cloudflare then delivers files from a server close to each visitor.'] },
      { h: 'Audit your plugins', p: ['Every plugin can add scripts, styles and database queries. Deactivate plugins you no longer use, replace heavy all-in-one plugins with lighter ones where possible, and check which plugins load files on pages that do not need them.'],
        tip: 'Test plugin changes on a staging copy of your site, not on the live site.' },
      { h: 'Reduce scripts, fonts and third-party tags', p: ['Chat widgets, sliders, multiple analytics tags and icon libraries add up quickly and are a major cause of poor INP. Load only what each page needs, delay non-essential scripts until after the page is interactive, and limit custom fonts to two families with the weights you actually use.'] },
      { h: 'Check your theme and page builder', p: ['Multipurpose themes and heavily nested page-builder layouts produce a lot of code. If your score stays low after the steps above, the theme itself may be the bottleneck. A lightweight or custom theme often solves problems that no plugin can.'] },
      { h: 'Look at your hosting last', p: ['If the server takes more than about 600 milliseconds to start responding (shown as Time to First Byte in testing tools) even with caching on, your hosting may be underpowered. Make sure you are on a current PHP version and consider managed WordPress or cloud hosting for stores and busy sites.'] },
      { h: 'Measure again and keep it fast', p: ['Re-run the same tests and compare with your baseline. Speed is not a one-time job: new plugins, large images and extra tracking tags slowly creep back in, so check your scores every few months.'] },
    ],
  },
  {
    slug: 'local-seo-google-business-profile-guide',
    title: 'Local SEO for small businesses: how to get found on Google Maps',
    seoTitle: 'Local SEO Guide: Rank on Google Maps (Small Business)',
    desc: 'How to set up and optimize your Google Business Profile, build local pages and earn reviews so nearby customers find you on Google Search and Maps.',
    date: '2026-11-17', tag: 'Local SEO', services: ['local-seo-and-google-business-profile', 'seo-setup-and-optimization', 'business-and-corporate-websites'],
    intro: 'When someone searches for a "dentist near me" or a "CA in Thane", Google shows a map with three businesses before any normal results. Those three spots get a large share of the calls and visits. Local SEO is the work of earning a place there, and most of it is free and within your control.',
    sections: [
      { h: 'Claim and verify your Google Business Profile', p: ['Your Google Business Profile is the listing that appears on Maps and in local results. Claim it at business.google.com and complete verification. An unverified profile will not rank well and can be edited by others.'] },
      { h: 'Complete every field', p: ['Google favours profiles that give searchers complete information.'],
        list: ['Choose the most specific primary category, then add relevant secondary categories.', 'Add accurate opening hours, including holiday hours.', 'Write a clear description of what you do and the areas you serve.', 'List your services or products with short descriptions.', 'Upload real photos of your premises, team and work, and keep adding new ones.'] },
      { h: 'Keep your name, address and phone consistent', p: ['Your business name, address and phone number (often called NAP) should be identical on your website, your profile and directories such as Justdial, IndiaMART or industry listings. Small differences, such as an old phone number, make Google less confident about your details.'] },
      { h: 'Earn reviews the right way', p: ['Review count, rating and how recent your reviews are all influence local rankings and, just as importantly, whether people choose you. Ask every happy customer, make it easy with a direct review link, and reply to every review, including negative ones, politely and promptly.'],
        tip: 'Never buy reviews or offer rewards for positive ones. It breaks Google policy and can get reviews removed or your profile suspended.' },
      { h: 'Build local pages on your website', p: ['Your website supports your profile. Create a dedicated page for each main service, and if you serve several areas, a genuinely useful page for each one, with local details, projects and directions rather than the same text with a different town name.'] },
      { h: 'Add local business structured data', p: ['Structured data (schema markup) tells search engines your business type, address, hours and service area in a format they can read reliably. It does not guarantee rankings, but it removes guesswork.'] },
      { h: 'Post updates and track results', p: ['Use profile posts for offers, events and news. Then track calls, direction requests and website clicks in your profile insights, and enquiries from organic search in Google Analytics, so you can see whether the work is bringing customers.'] },
    ],
  },
  {
    slug: 'website-redesign-without-losing-seo',
    title: 'How to redesign your website without losing Google rankings',
    seoTitle: 'Website Redesign Without Losing SEO: Migration Checklist',
    desc: 'A redesign or platform move can wipe out years of search traffic. Use this checklist to plan URLs, redirects, content and launch so your rankings survive.',
    date: '2026-11-17', tag: 'SEO', services: ['website-redesign-and-migration', 'seo-setup-and-optimization', 'analytics-and-tracking-setup'],
    intro: 'Many businesses launch a beautiful new website and then watch their enquiries fall. The cause is almost always the same: old pages disappeared, links broke and Google had to start over. A redesign does not have to hurt your SEO. It just needs a plan before the first line of code.',
    sections: [
      { h: 'Record where you stand today', p: ['Before you change anything, export your current performance from Google Search Console and Google Analytics: top pages, top search queries and the pages that bring enquiries. This is your benchmark and your list of pages you cannot afford to lose.'] },
      { h: 'Crawl and list every URL', p: ['Use a crawler such as Screaming Frog to list every page, image and PDF on the current site. Add URLs from your sitemap and Search Console so you do not miss pages that are no longer linked but still bring traffic.'] },
      { h: 'Map old URLs to new ones', p: ['Create a spreadsheet with each old URL and the most relevant page on the new site. Keep URLs the same wherever you can. Where a URL must change, it needs a permanent 301 redirect to its closest equivalent, not to the homepage.'],
        tip: 'Redirecting everything to the homepage is treated much like deleting the pages. Map each one to a relevant page.' },
      { h: 'Keep the content that ranks', p: ['A new design is a good time to improve content, but be careful with pages that already rank. Keep their main topic, headings and useful text, and improve them rather than replacing them with shorter copy.'] },
      { h: 'Carry over the technical SEO', p: [],
        list: ['Page titles and meta descriptions for every page.', 'Heading structure, with one clear H1 per page.', 'Image alt text.', 'Structured data, canonical tags and hreflang if you use languages.', 'Analytics and conversion tracking tags.'] },
      { h: 'Test on staging before launch', p: ['Build the new site on a staging address that search engines cannot index. Test every redirect from your spreadsheet, check forms and tracking, and confirm mobile speed before you go live.'] },
      { h: 'Launch day and the weeks after', p: ['Remove any "discourage search engines" setting from the new site, submit the new XML sitemap in Search Console and keep the old domain verified there. For the next six to eight weeks, watch for crawl errors, 404 pages and ranking changes, and fix problems quickly. Small, short-lived dips are normal; a steady fall is a signal to investigate.'] },
    ],
  },
]

const words = (g) => [g.intro, ...g.sections.flatMap((s) => [s.h, ...(s.p || []), ...(s.list || []), s.tip || ''])].join(' ').split(/\s+/).length
guides.forEach((g) => { g.minutes = Math.max(3, Math.round(words(g) / 200)) })

export const getGuide = (slug) => guides.find((g) => g.slug === slug)
export const sectionId = (h) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const formatDate = (d) => { const [y, m, day] = d.split('-').map(Number); return `${day} ${MONTHS[m - 1]} ${y}` }
