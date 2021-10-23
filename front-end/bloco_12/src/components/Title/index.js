import React, { Component } from 'react';
import style from './style.module.css';

export class Title extends Component {
  render() {
    const { logo, title, link, textLink } = this.props;
    return (
      <header className={style.TitleHeader}>
        <img src={logo} className={style.TitleLogo} alt='logo' />
        <h1>{title}</h1>
        <a
          className={style.TitleLink}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {textLink}
        </a>
      </header>
    );
  }
}

export default Title;
