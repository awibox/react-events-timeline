import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/EventsTimeline.scss';

const EventsTimelineItem = (props) => {
  const {
    content, date, label, location, title,
  } = props;
  return (
    <div className={styles.event}>
      <div className={styles.date}>{date}</div>
      <div className={styles.content}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemLabel}>{label}</div>
        <div className={styles.itemLocation}>{location}</div>
        <div className={styles.itemContent}>{content}</div>
      </div>
    </div>
  );
};

EventsTimelineItem.propTypes = {
  content: PropTypes.any,
  date: PropTypes.string,
  label: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
};

export default EventsTimelineItem;
