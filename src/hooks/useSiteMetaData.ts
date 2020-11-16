import { graphql, useStaticQuery } from 'gatsby';

interface ISiteMetaData {
  author: string;
  description: string;
  image: string;
  title: string;
}

export const useSiteMetadata = (): ISiteMetaData => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            author
            description
            image
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
