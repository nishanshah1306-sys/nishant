// Dummy projects for the portfolio. Replace names, results and demo links with your real work.
export const projects = [
  {
    slug: 'urban-bloom-florist', name: 'Urban Bloom Florist', category: 'E-commerce', kind: 'store',
    place: 'Mumbai', year: '2026', colors: ['#be185d', '#fce7f3'], timeline: '5 weeks',
    summary: 'A WooCommerce flower shop with same-day delivery slots and Razorpay checkout.',
    challenge: 'Orders came through WhatsApp and Instagram messages, which were slow to track and easy to miss.',
    solution: 'We built a custom WooCommerce store with delivery date and time slots, a pincode checker and a simple checkout, then set up Meta Ads and email reminders for festival seasons.',
    results: [{ n: 180, pre: '+', suf: '%', l: 'online orders in 3 months' }, { n: 2, suf: 's', l: 'average page load' }, { n: 34, suf: '%', l: 'repeat customers' }],
    services: ['woocommerce-store-setup', 'meta-ads-management', 'email-marketing-setup'],
    tools: ['WooCommerce', 'Razorpay', 'Meta Pixel', 'FluentCRM'], demo: 'https://demo.example.com/urban-bloom',
  },
  {
    slug: 'shah-and-co-accountants', name: 'Shah & Co. Accountants', category: 'Business website', kind: 'corporate',
    place: 'Thane', year: '2026', colors: ['#1d4ed8', '#dbeafe'], timeline: '3 weeks',
    summary: 'A trust-building corporate website for a chartered accountancy firm with local SEO.',
    challenge: 'The firm had no website and depended entirely on referrals.',
    solution: 'We designed a clear services-led site, set up Google Business Profile and local SEO, and added enquiry forms with WhatsApp and call tracking.',
    results: [{ n: 45, suf: '', l: 'enquiries in the first 60 days' }, { n: 12, suf: '', l: 'keywords on page one of Google' }, { n: 98, suf: '', l: 'mobile speed score' }],
    services: ['business-and-corporate-websites', 'local-seo-and-google-business-profile', 'analytics-and-tracking-setup'],
    tools: ['Elementor', 'Rank Math', 'GA4', 'Google Business Profile'], demo: 'https://demo.example.com/shah-and-co',
  },
  {
    slug: 'fitnest-gym-landing-page', name: 'FitNest Gym', category: 'Landing page', kind: 'landing',
    place: 'Pune', year: '2025', colors: ['#ea580c', '#ffedd5'], timeline: '5 days',
    summary: 'A fast lead-generation landing page for a new-year membership campaign.',
    challenge: 'Ad clicks were landing on a slow general page and few visitors left their number.',
    solution: 'A single-goal landing page with a short form, offer countdown and full conversion tracking, paired with Meta lead ads.',
    results: [{ n: 3, suf: 'x', l: 'higher conversion rate' }, { n: 41, suf: '%', l: 'lower cost per lead' }, { n: 1, suf: 's', l: 'load time on 4G' }],
    services: ['landing-page-development', 'meta-ads-management', 'speed-and-core-web-vitals-optimization'],
    tools: ['WordPress', 'GTM', 'Meta Pixel', 'WhatsApp API'], demo: 'https://demo.example.com/fitnest',
  },
  {
    slug: 'learnloop-academy', name: 'LearnLoop Academy', category: 'Courses and membership', kind: 'course',
    place: 'Bengaluru', year: '2026', colors: ['#7c3aed', '#ede9fe'], timeline: '7 weeks',
    summary: 'An online course platform with lessons, quizzes, certificates and paid memberships.',
    challenge: 'Classes ran on Zoom and payments were collected manually.',
    solution: 'A LearnDash site with drip lessons, quizzes and certificates, Razorpay subscriptions, and automated onboarding emails.',
    results: [{ n: 600, pre: '+', suf: '', l: 'students enrolled in 4 months' }, { n: 90, suf: '%', l: 'less admin time' }, { n: 4, suf: '', l: 'courses launched' }],
    services: ['membership-booking-and-lms-sites', 'custom-plugin-and-widget-development', 'email-marketing-setup'],
    tools: ['LearnDash', 'MemberPress', 'Razorpay', 'Zoom'], demo: 'https://demo.example.com/learnloop',
  },
  {
    slug: 'carefirst-clinic', name: 'CareFirst Clinic', category: 'Booking and local SEO', kind: 'booking',
    place: 'Thane', year: '2025', colors: ['#0d9488', '#ccfbf1'], timeline: '4 weeks',
    summary: 'A multilingual clinic website with online appointment booking and strong local search presence.',
    challenge: 'Patients phoned for every appointment and the clinic was hard to find on Google Maps.',
    solution: 'We added an online booking system with reminders, English and Marathi pages, and optimized the Google Business Profile.',
    results: [{ n: 70, suf: '%', l: 'bookings made online' }, { n: 3, suf: 'x', l: 'more map views' }, { n: 2, suf: '', l: 'languages supported' }],
    services: ['membership-booking-and-lms-sites', 'multilingual-websites', 'local-seo-and-google-business-profile'],
    tools: ['Amelia', 'Polylang', 'Rank Math', 'Google Maps'], demo: 'https://demo.example.com/carefirst',
  },
  {
    slug: 'spice-route-restaurant', name: 'Spice Route Restaurant', category: 'Redesign and migration', kind: 'corporate',
    place: 'Mumbai', year: '2025', colors: ['#b45309', '#fef3c7'], timeline: '3 weeks',
    summary: 'A redesign and migration from an outdated site to a fast WordPress build with online table booking.',
    challenge: 'The old site was slow, not mobile friendly and lost its Google rankings after a previous rebuild.',
    solution: 'We migrated content with full 301 redirects, rebuilt the design mobile-first and tuned speed and SEO.',
    results: [{ n: 65, suf: '%', l: 'faster page loads' }, { n: 52, suf: '%', l: 'more organic traffic' }, { n: 0, suf: '', l: 'rankings lost in migration' }],
    services: ['website-redesign-and-migration', 'responsive-and-mobile-first-design', 'seo-setup-and-optimization'],
    tools: ['WordPress', 'Redirection', 'Search Console', 'Cloudflare'], demo: 'https://demo.example.com/spice-route',
  },
]
export const projectCategories = ['All', ...new Set(projects.map((p) => p.category))]
// Demo buttons stay hidden until a project has a real link (placeholder example.com links are skipped).
export const hasDemo = (p) => Boolean(p.demo) && !p.demo.includes('example.com')
export const getProject = (slug) => projects.find((p) => p.slug === slug)
