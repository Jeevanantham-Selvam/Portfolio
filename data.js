

// ============================================================
// PORTFOLIO CONTENT — edit this file to update your portfolio
// ============================================================

const portfolioData = {

  // ── Identity ─────────────────────────────────────────────
  name: "Jeevanantham S",
  logo: "Jeevanantham",
  tag: "Flutter Developer",

  // Must be a plain string — the renderer types it character by character
  typingText: "Flutter Developer  |  Mobile Application Engineer",

  bio: `Results-driven Flutter Developer with 2+ years of experience building scalable Android, iOS and Desktop applications. Deployed 4+ apps to Play Store & App Store. Specialized in Clean Architecture, BLoC, Firebase and production-grade engineering.`,

  about: `I'm a Flutter Developer who engineers production-grade mobile experiences from the ground up — architecture to App Store. With 2+ years at Skyraan Technologies, I've independently designed, built, and shipped 4+ applications across Android, iOS, and Desktop.

My core strength is translating complex requirements into clean, scalable systems using BLoC, Clean Architecture, and modular feature-first design. I obsess over performance, offline resilience, and user experience.

Beyond code, I mentor junior developers, lead architecture reviews, and conduct R&D to keep my stack sharp. I built FlowScriptor — a visual blueprint planning tool that cut project development time by ~20%.

If you're looking for a Flutter engineer who owns the full lifecycle — from requirement analysis to release management — let's talk.`,

  // ── Profile image ────────────────────────────────────────
  profileImage: "images/profile.png",
  profileImageAlt: "Jeevanantham S — Flutter Developer",

  // ── Nav links ────────────────────────────────────────────
  navLinks: [
    { label: "About",      href: "#about"      },
    { label: "Skills",     href: "#skills"     },
    { label: "Projects",   href: "#projects"   },
    { label: "Apps",       href: "#apps"       },
    { label: "Contact",    href: "#contact"    },
  ],

  // ── Hero buttons ─────────────────────────────────────────
  heroButtons: [
    { label: "View Projects", href: "#projects", style: "primary"   },
    { label: "Hire Me",       href: "#contact",  style: "secondary" },
  ],

  // ── Skills — only `title` and `description` are used by the renderer ──
  skills: [
    {
      title: "Flutter & Dart",
      description: "Production-ready Android, iOS and Desktop apps. Expert in widget lifecycle, rendering optimization, and cross-platform code sharing.",
    },
    {
      title: "Clean Architecture",
      description: "BLoC, MVVM, MVC, Repository Pattern, feature-first modular structure. Built for maintainability and long-term scalability.",
    },
    {
      title: "Firebase Suite",
      description: "Firestore, Firebase Auth, FCM push notifications, Crashlytics real-time monitoring, and cloud function integrations.",
    },
    {
      title: "REST APIs & State Management",
      description: "Advanced API integration with response caching, optimized BLoC/GetX/Provider state management, and robust error handling.",
    },
    {
      title: "Offline-First Systems",
      description: "Sqflite, Shared Preferences, and local storage strategies for full functionality in low-network and no-network conditions.",
    },
    {
      title: "Auth & Security",
      description: "Google Sign-In, Firebase Auth, Flutter Secure Storage, and deep linking with GoRouter for secure, scalable navigation flows.",
    },
    {
      title: "Advanced Mobile Features",
      description: "OCR scanning, QR scanner, GPS tracking, Google Maps, document scanner, digital signature, real-time chat, PDF/JPG export, and TTS with live word sync.",
    },
    {
      title: "AdMob Monetization",
      description: "Full Google AdMob suite — Banner, Interstitial, Rewarded, and App Open Ads — integrated and optimized across multiple production apps.",
    },
    {
      title: "Deployment & Release Management",
      description: "Google Play Console and App Store Connect expert. Code signing, Android & iOS release builds, and end-to-end production lifecycle ownership.",
    },
    {
      title: "Tooling & Practices",
      description: "Git, GitHub, Postman, Figma, Android Studio, VS Code. Agile/Scrum, code review, performance profiling, and technical mentorship of junior devs.",
    },
  ],

  // ── Projects — only `title` and `description` are used by the renderer ──
  projects: [
    {
      title: "FlowScriptor",
      description: "Desktop-based visual blueprint and data-flow planning tool for software teams. Structured flow creation for code generation concepts reduced overall project development time by ~20%. Built with scalable modular architecture and reusable components.",
    },
    {
      title: "Doc Scanner",
      description: "Production document management app published on both Google Play Store and Apple App Store. Features OCR text recognition, QR scanning, PDF/JPG export, password protection, digital signatures, and offline storage with optimized scanning workflows.",
    },
    {
      title: "Mandapam Booking Platform",
      description: "Enterprise-level venue booking platform built with modular Clean Architecture, BLoC state management, and GoRouter deep linking. Designed for real-world booking complexity with scalable feature separation and production-grade navigation.",
    },
    {
      title: "Toilet Finder",
      description: "GPS-powered map utility app with real-time location tracking, nearby-facility search via Google Maps, user reviews system, and location-based filtering. Built for fast and intuitive facility discovery.",
    },
    {
      title: "Vidukathaigal",
      description: "Interactive Tamil learning platform with scheduled daily push notifications via FCM and fully offline content access using Sqflite. REST API-driven content with local sync ensures uninterrupted learning regardless of connectivity.",
    },
    {
      title: "RoadRules",
      description: "Server-driven learning app using WebView for dynamic CMS-managed content delivery. Content updates roll out from the backend without requiring new app releases — reducing deployment friction and keeping content always current.",
    },
    {
      title: "Word Connect App",
      description: "Integrated full Google AdMob monetization suite including Banner, Rewarded, Interstitial, and App Open Ads. Resolved critical Firebase Crashlytics production crashes and successfully extended the existing Android app to iOS using a shared Flutter codebase.",
    },
    {
      title: "Mehndi App",
      description: "Diagnosed and resolved critical performance bottlenecks that caused Play Store rejection. Profiled and optimized the app's rendering pipeline, then successfully redeployed the improved build to both Google Play Store and Apple App Store.",
    },
    {
      title: "Malayalam Stories App",
      description: "Optimized app rendering performance by reducing unnecessary widget rebuilds, significantly improving frame rate and scroll smoothness. Resolved multiple production crashes to restore full app stability for end users.",
    },
    {
      title: "Sudoku & Photo Editor",
      description: "Enabled full iOS support by implementing proper permission handling, entitlements, and App Store deployment configuration — extending both apps from Android-only to cross-platform releases on the Apple App Store.",
    },
    {
      title: "Jokes, Disease Dictionary & Agricultural Apps",
      description: "Implemented Text-to-Speech with synchronized real-time word highlighting, providing an accessible and engaging reading experience. Managed complete end-to-end deployment for all three apps across Google Play Store and Apple App Store.",
    },
  ],

  
 // ── Published apps ───────────────────────────────────────
  apps: [
    {
      title: "Doc Scanner",
      logo: "images/doc_Scanner.webp",
      description: "Production document scanner with OCR text recognition, QR scanning, PDF/JPG export, password protection and digital signature. Published on both Google Play Store and Apple App Store.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Vidukathaigal",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      description: "Tamil learning platform with scheduled daily push notifications, offline content storage via Sqflite, and REST API-driven content sync. Available on both stores.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "RoadRules",
      logo: "https://cdn-icons-png.flaticon.com/512/2972/2972531.png",
      description: "Server-driven road rules learning app with WebView CMS integration. Content updates deploy from the backend without requiring new app releases.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Toilet Finder",
      logo: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      description: "GPS-powered nearby facility finder with Google Maps integration, real-time location tracking, user reviews, and location-based filtering.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Word Connect",
      logo: "https://cdn-icons-png.flaticon.com/512/3131/3131607.png",
      description: "Word puzzle game with full Google AdMob monetization suite. Extended from Android to iOS using shared Flutter codebase with Firebase Crashlytics for production stability.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Mehndi App",
      logo: "https://cdn-icons-png.flaticon.com/512/2942/2942886.png",
      description: "Mehndi design gallery app with optimized rendering performance. Resolved critical Play Store rejection issues and successfully deployed to both Google Play Store and Apple App Store.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Malayalam Stories",
      logo: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
      description: "Malayalam story reading app with optimized widget rebuild performance and resolved production crashes for a smooth, stable reading experience.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Sudoku",
      logo: "https://cdn-icons-png.flaticon.com/512/685/685355.png",
      description: "Classic Sudoku puzzle game extended to iOS with proper permission handling and App Store deployment configuration for a seamless cross-platform experience.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Photo Editor",
      logo: "https://cdn-icons-png.flaticon.com/512/1375/1375106.png",
      description: "Mobile photo editing app extended to iOS with full permission handling and App Store release configuration. Deployed on both Google Play Store and Apple App Store.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Jokes App",
      logo: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
      description: "Jokes app featuring Text-to-Speech with synchronized real-time word highlighting for an engaging listening experience. Deployed on both Play Store and App Store.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Disease Dictionary",
      logo: "https://cdn-icons-png.flaticon.com/512/2382/2382533.png",
      description: "Medical reference app with Text-to-Speech and real-time word highlighting for accessible content consumption. Fully deployed on Google Play Store and Apple App Store.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
    {
      title: "Agricultural App",
      logo: "https://cdn-icons-png.flaticon.com/512/2909/2909769.png",
      description: "Agriculture information app with Text-to-Speech and synchronized word highlighting to support farmers with accessible content. Published on both Play Store and App Store.",
      links: [
        { label: "Play Store", href: "#" },
        { label: "App Store",  href: "#" },
        { label: "GitHub",     href: "#" },
      ],
    },
  ],
 


  // ── Experience — only `role`, `company`, `period`, `description` used ──
  experience: [
    {
      role:        "Software Engineer",
      company:     "Skyraan Technologies · Coimbatore, India",
      period:      "Jun 2024 – Present",
      description: "Independently developed and deployed 4+ production-ready Flutter applications for Android and iOS, owning the complete lifecycle from requirement analysis to production release. Architected scalable apps using BLoC, MVVM, MVC, and Clean Architecture. Built OCR scanning, QR scanning, real-time chat, digital signatures, PDF export, push notifications, and live data sync. Integrated Google Sign-In, Firebase Auth, AdMob full suite, Crashlytics, and FCM. Mentored junior developers and conducted 10+ R&D explorations on architecture and performance.",
    },
  ],

  // ── Contact ──────────────────────────────────────────────
  contact: {
    phone:      "+91 63830 04342",
    email:      "jeevanantham.selvaraj2002@gmail.com",
    linkedin:   "https://www.linkedin.com/in/jeevanantham-selvaraj-806335231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:     "https://github.com/",
    formAction: "https://formsubmit.co/jeevanantham.selvaraj2002@gmail.com",
  },

  // ── Footer ───────────────────────────────────────────────
  footerText: "© 2026 Jeevanantham S · Flutter Developer · Crafted with ☕ & Dart",
};



