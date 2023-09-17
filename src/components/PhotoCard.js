import React from 'react';
import styles from '../views/About.module.css';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const PhotoCard = ({ imageUrl, name, role, email, githubLink, linkedinLink }) => {
  return (
    <div className="text-center mb-4">
      <img src={imageUrl} alt={`${name}'s photo`} style={{ width: '80%', maxWidth: '200px', height: 'auto', maxHeight: '340px', borderRadius: '5px' }} />
      <h5 className={styles.blackText + " mt-3 font-weight-bold"}>{name}</h5>
      <div className={styles.roleText + " font-weight-bold"} style={{ color: 'black'}}>{role}</div>
      <a href={`mailto:${email}`} className={styles.emailLink}>{email}</a>
      <div className="d-flex justify-content-center mt-2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaGithub className={styles.icon} />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default PhotoCard;