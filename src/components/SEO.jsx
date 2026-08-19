import { Helmet } from "react-helmet-async";

const defaults = {
  title: "Sanjivani Group — Agriculture Division | Sugar & Cane Development",
  description:
    "Sahakar Maharshi Shankar Rao Kolhe Sahakari Sakhar Karkhana Ltd. 63+ year old farmer cooperative producing refined sugar, ethanol, and sustainable by-products with dedicated cane development support.",
  keywords:
    "cooperative sugar factory Maharashtra, sugarcane by-products India, farmer support sugar cooperative, Sanjivani sugar factory, juice to ethanol distillery"
};

export default function SEO({ title, description, keywords, image, path }) {
  const pageTitle = title ? `${title} | Sanjivani Agriculture` : defaults.title;
  const pageDescription = description || defaults.description;
  const pageKeywords = keywords
    ? `${defaults.keywords}, ${keywords}`
    : defaults.keywords;
  const canonical = path ? `https://sanjivani-agri.coop${path}` : undefined;

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
