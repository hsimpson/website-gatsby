import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IProject } from '../interfaces';
import { Paper, Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby';

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
  })
);

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps): React.ReactElement => {
  const classes = useStyles();

  const getLocalDate = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      // weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const date = new Date(props.project.frontmatter.date);
    const dateTimeFormat = new Intl.DateTimeFormat(navigator.language, options);
    return dateTimeFormat.format(date);
  };

  return (
    <Link className={classes.link} to={`/${props.project.slug}`}>
      <Paper className={classes.paper}>
        <div className={classes.image}>
          <img
            src={props.project.frontmatter.cover.childImageSharp.fluid.src}
            alt={props.project.frontmatter.title}></img>
        </div>
        <div className={classes.text}>
          <Box padding={0.75}>
            <Typography className={classes.title} variant="body1" component="p">
              {props.project.frontmatter.title}
            </Typography>
          </Box>
          <Box padding={0.75}>
            <Typography variant="caption" color="textSecondary" component="p" noWrap>
              {props.project.frontmatter.description}
            </Typography>
          </Box>
          <Box padding={0.75}>
            <Typography variant="caption" color="textSecondary" component="p" noWrap>
              {getLocalDate()}
            </Typography>
          </Box>
        </div>
      </Paper>
    </Link>
  );
};

export default ProjectCard;
