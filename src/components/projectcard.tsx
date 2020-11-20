import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IProject } from '../interfaces';
import { Paper, Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { getLocaleDate } from '../utils';

interface ProjectCardProps {
  project: IProject;
}

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      '& : hover': {
        textDecoration: 'none',
      },
    },
    paper: {
      height: '230px',
      display: 'flex',
      flexDirection: 'column',
    },
    image: {
      backgroundColor: '#c92d2d',
      height: '120px',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
    text: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontWeight: 'bold',
    },
    lastrow: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
  })
);

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps): React.ReactElement => {
  const classes = useStyles();
  const { frontmatter, slug } = props.project;

  const getCoverImage = (): React.ReactElement | null => {
    if (frontmatter.cover) {
      return <img src={frontmatter.cover.childImageSharp.fluid.src} alt={frontmatter.title}></img>;
    }
    return null;
  };

  return (
    <Link className={classes.link} to={`/${slug}`}>
      <Paper className={classes.paper}>
        <div className={classes.image}>{getCoverImage()}</div>
        <div className={classes.text}>
          <Box padding={0.75}>
            <Typography className={classes.title} variant="body1" component="p">
              {frontmatter.title}
            </Typography>
          </Box>
          <Box padding={0.75}>
            <Typography variant="caption" color="textSecondary" component="p" noWrap>
              {frontmatter.description}
            </Typography>
          </Box>
          <Box className={classes.lastrow} padding={0.75}>
            <Typography variant="caption" color="textSecondary" component="p" noWrap>
              {getLocaleDate(frontmatter.dateCreated)}
            </Typography>
          </Box>
        </div>
      </Paper>
    </Link>
  );
};

export default ProjectCard;
