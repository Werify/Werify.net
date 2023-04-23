// icons list https://icones.js.org/

interface SidebarItem {
  name: string;
  icon: string;
  route?: string;
  childern?: SidebarItem[];
  counts?: number;
  breakdown?: boolean;
}

export default <SidebarItem[]>[
  {
    name: "Home",
    icon: "mdi:home",
    route: "/",
  },
  {
    name: "Products",
    icon: "mdi:package-variant-closed",
    route: "/my/products",
  },
  {
    name: "Sign",
    icon: "mdi:account-lock-open",
    route: "/sign",
  },
  {
    name: "Pricing",
    icon: "mdi:cash-usd",
    route: "/pricing",
  },
  {
    name: "products",
    icon: "mdi:chart-line",
    route: "/my/products",
  },
  {
    name: "Help",
    icon: "mdi:account-question-outline",
    route: "/help",
  },
  {
    name: "Pages",
    icon: "mdi:format-page-split",
    childern: [{ name: "Settings" }, { name: "Kanban" }],
  },
  {
    name: "Sales",
    icon: "mdi:point-of-sale",
    childern: [{ name: "Products" }, { name: "Billing" }],
  },
  {
    name: "Messages",
    icon: "mdi:android-messages",
    counts: 69,
    route: "/messages",
  },
  {
    name: "Docs",
    icon: "mdi:file-code-outline",
    breakdown: true,
    route: "/docs",
  },
  {
    name: "Components",
    icon: "mdi:video-input-component",
    route: "/components",
  },
];
