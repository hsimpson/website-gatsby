export interface ISiteMetaData {
  author: string;
  description: string;
  image: string;
  title: string;
}

export interface IProject {
  frontmatter: {
    type: 'post';
    date: string;
    description: string;
    tags: string[];
    title: string;
    cover: {
      childImageSharp: {
        fluid: {
          src: string;
        };
      };
    };
  };
  slug: string;
}
