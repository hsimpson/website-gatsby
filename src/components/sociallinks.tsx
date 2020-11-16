import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    socialLinks: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    link: {
      // margin: '0 5px',
      '& img': {
        width: '60%',
        height: 'auto',
      },
    },
  })
);

interface ISocialLink {
  name: string;
  image: string;
  to: string;
}

const SocialLinks: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  const links: ISocialLink[] = [
    {
      name: 'github',
      image: './images/social/github.svg',
      to: 'https://github.com/hsimpson',
    },
    {
      name: 'twitter',
      image: './images/social/twitter-official.svg',
      to: 'https://twitter.com/daniel_toplak',
    },
    {
      name: 'twitch',
      image: './images/social/twitch-icon.svg',
      to: 'https://www.twitch.tv/donnerknalli',
    },
    {
      name: 'discord',
      image: './images/social/discord-tile.svg',
      to: 'https://discord.gg/MV9hGqk',
    },
  ];

  return (
    <div className={classes.socialLinks}>
      {links.map((link) => (
        <a key={link.name} href={link.to} rel="noreferrer" target="_blank">
          <Avatar className={classes.link} variant="square" alt={link.name} src={link.image}></Avatar>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
