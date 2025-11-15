# Performance, SEO, and Legal Requirements Checklist

A "top class" website is not just about looks; it's about speed, discoverability, and compliance. This checklist covers the final, crucial steps for a high-performing, low-traffic startup site.

## 1. Performance & User Experience (UX)

Since you are aiming for a high-performing site, these are non-negotiable checks.

| Requirement | Description | Status Check |
| :--- | :--- | :--- |
| **Core Web Vitals** | Test your site using Google's PageSpeed Insights. Aim for "Good" scores across **LCP** (Largest Contentful Paint), **FID** (First Input Delay), and **CLS** (Cumulative Layout Shift). | LCP should be fast despite the video background (use a poster image fallback). |
| **Mobile Responsiveness** | The site must look and function perfectly on all screen sizes (phones, tablets, desktops). The alternating blocks must stack cleanly on mobile. | Test on various devices and browsers. |
| **Accessibility (A11y)** | Ensure compliance with WCAG 2.1 standards. This includes proper color contrast, keyboard navigation, and descriptive **Alt Tags** for all images (especially the mascots). | Use an accessibility checker tool (e.g., Lighthouse) to audit the final build. |
| **Minification** | Minify all HTML, CSS, and JavaScript files to remove unnecessary characters and reduce file size. | This is a standard build step for production code. |

## 2. Search Engine Optimization (SEO)

You have a great foundation with the lengthy, keyword-rich home page. Now, you need to ensure search engines can find and understand it.

| Requirement | Description | Action Required |
| :--- | :--- | :--- |
| **Metadata Implementation** | Implement the **Title Tag** and **Meta Description** for every page. Use the H1 from the home page for the title tag: "Movietoons — A world where your memories become movies." | Ensure the meta description is compelling and includes keywords like "animated stories" and "memories." |
| **Schema Markup** | Implement **FAQPage Schema** on the home page to allow your 25 questions to appear as rich snippets in Google search results. | This significantly increases visibility and click-through rate. |
| **Google Analytics / Tag Manager** | Install tracking code to monitor traffic, user behavior, and conversion events (e.g., clicks on the "Start Your Story" CTA). | Essential for understanding what works and what doesn't. |
| **Google Search Console** | Verify your site ownership and submit your **Sitemap** (`sitemap.xml`) to Google. | This tells Google exactly what pages to crawl and index. |
| **Internal Linking** | Ensure all pages (`index`, `about`, `pricing`, `product`) are linked to each other logically, not just in the main navigation. | This helps distribute "link equity" and guides users/crawlers through the site. |

## 3. Legal & Compliance

As a business, you must comply with global privacy and legal standards, especially if you are collecting user data (even just email addresses).

| Requirement | Description | Action Required |
| :--- | :--- | :--- |
| **Privacy Policy** | A detailed document explaining what data you collect, how you use it, and how users can control it. **Mandatory** if you use analytics or collect emails. | Consult a legal professional or use a reputable privacy policy generator. |
| **Terms of Service (ToS)** | A document outlining the rules for using your service, including intellectual property rights, payment terms, and liability limitations. | **Mandatory** for a service like Movietoons (especially regarding content ownership). |
| **Cookie Consent Banner** | If you use tracking cookies (like Google Analytics), you must display a banner to users, particularly those in the EU (GDPR) and certain US states. | Implement a simple, non-intrusive consent solution. |
| **Contact Information** | Ensure your contact page includes a physical address (or P.O. box) and a clear email address for support and legal inquiries. | Builds trust and is legally required in many jurisdictions. |
