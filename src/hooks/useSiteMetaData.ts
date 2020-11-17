import { graphql, useStaticQuery } from 'gatsby';
import { ISiteMetaData } from '../interfaces';

export const useSiteMetadata = (): ISiteMetaData => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaDataQuery {
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
