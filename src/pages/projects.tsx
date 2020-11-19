import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/projectcard';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      padding: '16px',
      flexGrow: 1,
    },
    grid: {
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    },
  })
);

const ProjectPage = (): React.ReactElement => {
  const classes = useStyles();
  const projects = useProjects();

  return (
    <Layout>
      <SEO title="Projects" />
      <div className={classes.root}>
        <h1>Projects</h1>
        <div className={classes.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.frontmatter.title} project={project}></ProjectCard>
          ))}
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Paper key={value} className={classes.paper}></Paper>
          ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
