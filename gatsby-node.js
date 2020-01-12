// const path = require('path');

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const { data } = await graphql(`
//     {
//       allSimpleSections: allContentfulSectionSimple {
//         nodes {
//           id
//           columnReverse
//         }
//       }
//     }
//   `);

//   // creates pages for Article Content Model
//   data.allSimpleSections.nodes.forEach(section => {
//     console.log('section is', section);
//     createPage({
//       path: `test/${section.id}`,
//       component: path.resolve('./src/templates/SectionSimple.js'),
//       context: {
//         contentfulId: section.id,
//         columnReverse: section.columnReverse ? section.columnReverse : false,
//       },
//     });
//   });
// };
