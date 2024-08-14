const title = "Joey Wu";
const description = "Machine Learning Engineer, a solo entrepreneur, working on a portfolio of small bets";

const SEO = {
  title,
  description,
  canonical: "https://joeywu.cn",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://joeywu.cn",
    title,
    description,
    images: [
      {
        url: "https://joeywu.cn/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@ZhantaoW9357",
    site: "@ZhantaoW9357",
    cardType: "summary_large_image",
  },
};

export default SEO;
