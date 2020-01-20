import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/EventsTimeline.scss';

const EventsTimelineItem = (props) => {
  const { year, title, content } = props;
  return (
    <div className={styles.event}>
      <div className={styles.year}>{year}</div>
      <div className={styles.content}>
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

EventsTimelineItem.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default EventsTimelineItem;
