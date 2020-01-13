import { graphql, useStaticQuery } from 'gatsby';

const GetAllMenusHook = () => {
  const data = useStaticQuery(graphql`
    {
      allItems: allContentfulMenuItems {
        nodes {
          id
          title
          slug
          subtitle {
            subtitle
          }
          category
          subcategory
          pictures {
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const items = data.allItems.nodes;

  return items;
};

export default GetAllMenusHook;
