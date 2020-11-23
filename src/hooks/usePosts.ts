import { graphql, useStaticQuery } from 'gatsby';
import { IPost } from '../interfaces';

export const usePosts = (): IPost[] => {
  const { allMdx } = useStaticQuery(
    graphql`
      query PostsQuery {
        allMdx(
          filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
          sort: { fields: frontmatter___dateCreated, order: DESC }
        ) {
          nodes {
            frontmatter {
              type
              dateCreated
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
