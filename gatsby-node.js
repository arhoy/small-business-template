const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      menuItems: allContentfulMenuItems {
        nodes {
          slug
        }
      }
    }
  `);

  // creates pages Menu
  data.menuItems.nodes.forEach(item => {
    createPage({
      path: `menu/${item.slug}`,
      component: path.resolve('./src/templates/MenuItemTemplate.js'),
      context: {
        slug: item.slug,
      },
    });
  });
  // creates pages for Simple Menu Template for reference
  data.menuItems.nodes.forEach(item => {
    createPage({
      path: `menu-test/${item.slug}`,
      component: path.resolve('./src/templates/MenuItemSimpleTemplate.js'),
      context: {
        slug: item.slug,
      },
    });
  });
};
