# Change Report

- `app/Components/DataNotFound.js`: Added a reusable empty-data page message.
- `app/search/[...params]/page.js`: Shows a no-results state and sets empty search URLs to noindex; normalizes canonical casing.
- `app/global-companies-list/[country]/[page]/page.js`: Shows an empty-data state and sets empty list pages to noindex.
- `lib/companies/getCompaniesList.js`: Normalizes upstream total counts, aligns API ranges to 100 records, filters invalid company names, and bypasses stale cached counts.
- `app/global-companies-list/Companies.js`: Uses normalized total count and the same page-size constant for pagination.
- `app/global-companies/[country]/[company]/page.js`, `lib/companies/getCompanyData.js`: Set missing company pages to noindex and treat failed data requests as unavailable.
- `app/global-products/[products]/[country]/[type]/[page]/page.js`: Shows an empty-data state, sets empty pages to noindex, and normalizes the canonical URL.
- `app/ports-data/[country]/[code]/page.js`: Shows an empty-data state and sets empty pages to noindex.
- `lib/global-ports/PortData.js`, `app/global-ports/[Country]/[Port]/page.js`: Stop rendering placeholder port records when upstream data is empty, invalidate old placeholder cache entries, show a not-found state, and noindex the page.
- `app/global-hs-code-list/[...searchresult]/page.js`, `lib/global-hs-code/getHsCodeData.js`: Handle empty and failed HS-code lookups, set empty results to noindex, and add normalized route canonicals.
- `app/country-wise/[slug]/page.js`, `app/country-wise-import-data/[slug]/page.js`, `app/country-wise-export-data/[slug]/page.js`: Show not-found states and set noindex when the requested Strapi record is absent; canonicalize to the actual route paths.
- `app/layout.js`, `app/page.js`, `app/faq/page.js`, `app/industries/[slug]/page.js`: Remove the inherited homepage canonical, preserve an explicit homepage canonical, align page canonical/Open Graph URLs with their real routes, and noindex invalid industry slugs.
- `lib/blogs.js`: Added the Strapi `/api/blogs` adapter using `populate=*` to retrieve article content and cover media; category is read as a scalar. HTTP failures log status and bounded response details before fallback. The fallback shape is the suggested collection type: `slug`, `title`, `excerpt`, `category`, `publishedAt`, `cover_image`, and `content`.
- `app/blogs/page.js`, `app/blogs/BlogBrowser.js`, `app/blogs/[slug]/page.js`: Added searchable and topic-filterable blog browsing, article pages, and missing-article noindex handling.
- `app/blogs/page.js`, `app/blogs/BlogBrowser.js`: Refined the journal masthead, brand-accented search/filter controls, featured article layout, and compact responsive fallback artwork.
- `app/blogs/[slug]/page.js`: Redesigned article reading pages with fixed-header clearance, a themed editorial masthead, date/read-time metadata, trade-data cover fallback, and a focused reading column.
- `app/Components/Header.js`: Added Blogs to desktop and mobile navigation and use Next Link for the logo home link.

Validation note: the upstream company-count endpoint was unreachable during this session, so its live pagination response could not be confirmed. The pagination implementation uses the API's scoped `Total Count` (or supported total field) divided by the 100-record request size.

Verification: `npm run build` passes. Focused ESLint passes with no errors and two image-optimization warnings in the blog templates. Browser checks confirmed the blog fallback, search filtering, article rendering, single route-matching canonicals on FAQ and industry pages, and noindex on a missing blog article.
