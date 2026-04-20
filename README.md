# Subbu Estates Real Estate Website

Modern React and Vite frontend for a premium real estate company offering open plots, flats, commercial land, agriculture land, and property management services.

## Run Locally

```bash
npm install
npm run dev
```

The development server defaults to `http://127.0.0.1:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Pages

- Home: premium lead-generation hero, services, featured properties, ventures, locations, testimonials, enquiry form
- About: company story, process, values
- Ventures: featured venture portfolio with CTAs
- Properties: searchable/filterable property listings
- Property Details: individual listing pages at `/properties/:slug`
- Property Management: packages, services, owner journey, enquiry form
- Contact: form, WhatsApp, call, email, address, coverage

## Edit Content

Primary dummy content, property listings, ventures, packages, phone numbers, and placeholder image URLs live in:

```text
src/data/properties.js
```

The current logo is served from:

```text
public/assets/subbu_estate_logo.jpg
```

Placeholder visuals currently use public Unsplash image URLs. Replace them with owned project photos or approved Google Images assets before production launch.

## SEO

Base metadata, Open Graph data, organization schema, `robots.txt`, `sitemap.xml`, and route-level document titles/descriptions are included. Update the placeholder domain `https://www.subbuestates.com` before deployment.
