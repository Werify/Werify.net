interface IHeader {
  logo: string;
  darkLogo: string;
  menu: {
    title: string;
    link: string;
  }[];
  megaMenu: boolean | string[];
  hideSearchBar: boolean;
  hideLanguageSelector: boolean;
  languageList: {
    lang: string;
    flagSrc: string;
    text: string;
  }[];
  hideThemeSelector: boolean;
  loginButton: {
    title: string;
    hideLoginButton: boolean;
    loginButtonClass: string;
    loginButtonIconName: string;
  };
}
interface IFooter {
  logo: string;
  darkLogo: string;
  footerLinks: {
    title: string;
    links: {
      title: string;
      link: string;
      target?: string;
    }[];
  }[];
  copyRight: string;
  partOf: string;
  emailAPI: string;
  socials: {
    icon: string;
    link: string;
  }[];
}
export default defineAppConfig({
  config: {
    header: {
      logo: "../public/images/logo.svg",
      darkLogo: "../public/images/logo-dark.svg",
      menu: [
        { title: "Product", link: "/product" },
        { title: "Pricing", link: "/pricing" },
        { title: "Help", link: "/help" },
      ],
      megaMenu: true,
      hideSearchBar: false,
      hideLanguageSelector: false,
      languageList: [
        {
          lang: "en",
          flagSrc: "/img/icon/en.svg",
          text: "English",
        },
        {
          lang: "fa",
          flagSrc: "/img/icon/ir.svg",
          text: "فارسی",
        },
        {
          lang: "ar",
          flagSrc: "/img/icon/ar.svg",
          text: "العربية",
        },
        {
          lang: "tr",
          flagSrc: "/img/icon/tr.svg",
          text: "Türkçe",
        },
      ],
      hideThemeSelector: false,
      loginButton: {
        title: "Login",
        hideLoginButton: false,
        loginButtonClass:
          " py-1 rounded  text-blue-600 dark:text-gray-200 ms-3 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all",
        loginButtonIconName: "mdi:account-circle-outline",
      },
    } as IHeader,

    footer: {
      logo: "../public/images/logo.svg",
      darkLogo: "../public/images/logo-dark.svg",
      hideEmailBox: false,
      emailAPI: "https://api.werify.net/api/Email/ContactUs",
      copyRight: `<span>© 2022-2023
                            <a href="https://werify.net" class="hover:underline">Werify</a>.
                            All Rights Reserved.</span
                          >`,
      partOf: `<p>
        Proudly Part Of
        <a
          href="https://briofy.net"
          target="_blank"
          rel="external"
          class="hover:underline font-semibold"
          >Briofy</a
        >
        Family
      </p>`,
      socials: [
        {
          icon: "mdi:twitter-circle",
          link: "https://twitter.com/werifyapp",
        },

        {
          icon: "mdi:instagram",
          link: "https://www.instagram.com/werifyapp",
        },
        {
          icon: "mdi:linkedin",
          link: "https://www.linkedin.com/company/werifyapp",
        },
        {
          icon: "mdi:youtube",
          link: "https://www.youtube.com/channel/UCQ1Z6X0Z4ZqZ5Z4XZ2Z2Z2A",
        },
        {
          icon: "mdi:github",
          link: "https://github.com/werify",
        },
      ],
      footerLinks: [
        {
          title: "Quick Access",
          links: [
            { title: "About", link: "/about" },
            { title: "Contact", link: "/contact" },
            { title: "Pricing", link: "/pricing" },
            { title: "Newsroom", link: "/blog/news" },
            { title: "Blog", link: "/blog" },
            { title: "Careers", link: "/careers" },
            { title: "Privacy Policy", link: "/privacy" },
            { title: "Cookies Policy", link: "/cookies" },
            { title: "Terms Of Service", link: "/terms" },
          ],
        },
        {
          title: "Products",
          links: [
            { title: "Account", link: "/product/account" },
            { title: "Drive", link: "/product/drive" },
            { title: "Pasles", link: "/product/pasles" },
            { title: "Comment", link: "/product/comment" },
            { title: "Review", link: "/product/review" },
            { title: "Helpdesk", link: "/product/help-desk" },
            { title: "Feedback", link: "/product/feedback" },
            { title: "Verification", link: "/product/verification" },
            { title: "eKYC", link: "/product/ekyc" },
            { title: "eSign", link: "/product/esign" },
          ],
        },
        {
          title: "Support",
          links: [
            { title: "F.A.Q", link: "/faq" },
            { title: "Documentation", link: "/documentation" },
            { title: "How To", link: "/how-to" },
            { title: "API Docs", link: "/docs/api" },
            {
              title: "Status System",
              link: "https://status.werify.net",
              target: "_blank",
            },
            { title: "Use Cases", link: "/use-cases" },
            { title: "Brand Book", link: "/brand-book" },
            { title: "DMCA", link: "/dmca" },
            { title: "Do Not Sell My Info", link: "/do-not-sell-my-info" },
          ],
        },
        {
          title: "More",
          links: [
            { title: "Download Android", link: "/mobile/android" },
            { title: "Download iOS", link: "/mobile/ios" },
            { title: "Open Source", link: "/open-source" },
            { title: "#werify", link: "/hashtag-werify" },
            { title: "Bug Bounty", link: "/bug-bounty" },
            { title: "Disclaimer", link: "/disclaimer" },
            { title: "CSR", link: "/csr" },
          ],
        },
        {
          title: "From Family",
          links: [
            { title: "Briofy", link: "https://briofy.net", target: "_blank" },
            { title: "Trader4", link: "https://trader4.net", target: "_blank" },
            { title: "Bulutly", link: "https://bulutly.net", target: "_blank" },
            { title: "AzPays", link: "https://azpays.net", target: "_blank" },
            { title: "Streamfy", link: "https://streamfy.net", target: "_blank"},
            { title: "Learnfy", link: "https://learnfy.net", target: "_blank" },
            { title: "Mehrify", link: "https://mehrify.net", target: "_blank" },
            { title: "Carefy", link: "https://carefy.net", target: "_blank" },
            { title: "More from Briofy", link: "https://briofy.net/products", target: "_blank"},
          ],
        },
      ],
    } as IFooter,
  },
});
