/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "platum.kr",
      "www.google.com",
      "avatars3.githubusercontent.com",
      "www.sitepoint.com",
      "realm.io",
      "avatars2.githubusercontent.com",
      "logdown.com",
      "static.viget.com",
      "material-ui.com",
      "react.html.cn",
      "a.mtstatic.com",
      "hackernoon.com",
      "www.netguru.com",
      "techbbuzzart.files.wordpress.com",
      "dab1nmslvvntp.cloudfront.net",
      "repository-images.githubusercontent.com",
      "cdn.slidesharecdn.com",
      "daveceddia.com",
      "www.progville.com",
      "www.valentinog.com",
      "react.html",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Home",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
