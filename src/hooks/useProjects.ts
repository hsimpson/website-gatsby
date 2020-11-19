import { graphql, useStaticQuery } from 'gatsby';
import { IProject } from '../interfaces';

export const useProjects = (): IProject[] => {
  const { allMdx } = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allMdx(
          filter: { frontmatter: { type: { eq: "project" }, published: { eq: true } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            frontmatter {
              type
              date
              description
              tags
              title
              cover {
                childImageSharp {
                  id
                  fluid {
                    src
                  }
                }
              }
            }
            slug
          }
        }
      }
    `
  );
  return allMdx.nodes;
};
