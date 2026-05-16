export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "bykcli",
      description: "A lightweight, extensible collection of CLI utilities",
    },
    header: {
      title: "BYKCLI",
      darkModeToggle: true,
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/fcbyk/bykcli",
          target: "_blank",
        },
      ],
    },
    search: {
      enabled: true,
      style: "button"
    },
  },
});
