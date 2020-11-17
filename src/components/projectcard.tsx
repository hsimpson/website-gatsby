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
    paper: {
      height: '180px',
      display: 'flex',
      flexDirection: 'column',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      '& : hover': {
        textDecoration: 'none',
      },
    },
    image: {
      backgroundColor: '#c92d2d',
      height: '120px',
    },
    text: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Link className={classes.link} to={`/${props.project.slug}`}>
        <div className={classes.image}>
          <img src={props.project.frontmatter.cover?.relativePath} alt={props.project.frontmatter.title}></img>
        </div>
        <div className={classes.text}>
          <Box padding={0.5}>
            <Typography variant="body1" component="p">
              {props.project.frontmatter.title}
            </Typography>
          </Box>
          <Box padding={0.5}>
            <Typography variant="caption" color="textSecondary" component="p">
              {props.project.frontmatter.description}
            </Typography>
          </Box>
        </div>
      </Link>
    </Paper>
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image={props.project.frontmatter.cover?.relativePath}
    //       title={props.project.frontmatter.title}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {props.project.frontmatter.title}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         {props.project.frontmatter.description}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   {/* <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions> */}
    // </Card>
  );
};

export default ProjectCard;
