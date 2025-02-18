export const navlinks = [
  { title: "Dashboard", icon: "/dashboard.svg", route: "/dashboard" },
  { title: "Activity", icon: "/activity.svg", route: "/dashboard/activity" },
  {
    title: "Blocked Request list",
    icon: "/blocked.svg",
    route: "/dashboard/blocked",
  },
];
export const sublinks = [
  {
    title: "Settings",
    icon: "/settings.svg",
    links: [
      { subT: "Categoried and Filters", route: "/dashboard/settings/cf" },
      { subT: "Custom Domains", route: "/dashboard/settings/domain" },
      { subT: "Blocked pages/URLs", route: "/dashboard/settings/blocked" },
    ],
  },
  {
    title: "Account",
    icon: "/users.svg",
    links: [
      { subT: "Billing", route: "/dashboard/account/billing" },
      { subT: "User Profile", route: "/dashboard/account/profile" },
      { subT: "Security", route: "/dashboard/account/security" },
      { subT: "Time Zone", route: "/dashboard/account/timezone" },
    ],
  },
];
export const combinedNavLinks = [
    { title: "Configuration", icon: "/activity.svg", activeicon:"/activeactivity.svg", route: "/dashboard" },
    { title: "Dashboard", icon: "/dashboard.svg", activeicon:"/activedashboard.svg", route: "/dashboard/activity" },
    { title: "Blocked Request list", icon: "/blocked.svg", activeicon:"/activeblocked.svg", route: "/dashboard/blocked" },
    {
      title: "Settings",
      icon: "/settings.svg",
      activeicon:"/activesettings.svg",
      links: [
        { subT: "Categories and Filters", route: "/dashboard/settings/cf" },
        { subT: "Custom Domains", route: "/dashboard/settings/domain" },
        // { subT: "Blocked pages/URLs", route: "/dashboard/settings/blocked" },
      ],
    },
    {
      title: "Account",
      icon: "/users.svg",
      activeicon:"/users.svg",
      links: [
        // { subT: "Billing", route: "/dashboard/account/billing" },
        { subT: "User Profile", route: "/dashboard/account/profile" },
        { subT: "Security", route: "/dashboard/account/security" },
        // { subT: "Time Zone", route: "/dashboard/account/timezone" },
      ],
    },
  ];
  