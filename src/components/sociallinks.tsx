import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import '../fontawsome';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    socialLinks: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '0 5px',
    },
    // link: {
    //   // margin: '0 5px',
    //   '& img': {
    //     width: '60%',
    //     height: 'auto',
    //   },
    // },
    link: {
      fontSize: '1.5em',
      color: '#ffffff',
      margin: '0 10px',
    },
  })
);

interface ISocialLink {
  name: string;
  // image: string;
  to: string;
  faPrefix: string;
  faIcon: string;
}

const SocialLinks: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  const links: ISocialLink[] = [
    {
      name: 'github',
      faPrefix: 'fab',
      faIcon: 'github',
      to: 'https://github.com/hsimpson',
    },
    {
      name: 'twitter',
      faPrefix: 'fab',
      faIcon: 'twitter',
      to: 'https://twitter.com/daniel_toplak',
    },
    {
      name: 'twitch',
      faPrefix: 'fab',
      faIcon: 'twitch',
      to: 'https://www.twitch.tv/donnerknalli',
    },
    {
      name: 'discord',
      faPrefix: 'fab',
      faIcon: 'discord',
      to: 'https://discord.gg/MV9hGqk',
    },
    {
      name: 'linkedin',
      faPrefix: 'fab',
      faIcon: 'linkedin',
      to: 'https://www.linkedin.com/in/daniel-toplak-37593198',
    },
    {
      name: 'youtube',
      faPrefix: 'fab',
      faIcon: 'youtube',
      to: 'https://www.youtube.com/channel/UCG_DSyi9GdeEVyzUUfVOxSQ',
    },
  ];

  return (
    <div className={classes.socialLinks}>
      {links.map((link) => (
        <a key={link.name} href={link.to} rel="noreferrer" target="_blank">
          {/* <Avatar className={classes.link} variant="square" alt={link.name} src={link.image}></Avatar> */}
          <FontAwesomeIcon
            className={classes.link}
            icon={[link.faPrefix as IconPrefix, link.faIcon as IconName]}></FontAwesomeIcon>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
