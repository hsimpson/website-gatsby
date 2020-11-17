import { graphql, useStaticQuery } from 'gatsby';
import { IProject } from '../interfaces';

export const useProjects = (): IProject[] => {
  const { allMdx } = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
          nodes {
            frontmatter {
              type
              date
              description
              tags
              title
            }
            slug
          }
        }
      }
    `
  );
  return allMdx.nodes;
};
