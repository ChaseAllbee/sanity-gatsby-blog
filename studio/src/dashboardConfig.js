export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6317b8be6eee0402f33575c3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zsh7kveo",
                  apiId: "cf9678d0-a072-4c48-adbb-c15c42a881be",
                },
                {
                  buildHookId: "6317b8be251a9302a495bcc2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-msz4neu1",
                  apiId: "ce760bf0-0976-4374-87cd-31aaf97e6c10",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ChaseAllbee/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-msz4neu1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
