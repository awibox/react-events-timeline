import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EventsTimelineItem from './EventsTimelineItem';
import styles from '../styles/EventsTimeline.scss';

const EventsTimeline = (props) => {
  const { title, icon, data } = props;
  return (
    <div className={classNames(styles.timeline, {
      [styles[props.color]]: props.color,
    })}>
      <div className={styles.title}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <span>{title}</span>
      </div>
      {data && data.map((item) => <EventsTimelineItem
        key={item.date}
        content={item.content}
        label={item.label}
        location={item.location}
        title={item.title}
        date={item.date} />)}
    </div>
  );
};

EventsTimeline.propTypes = {
  color: PropTypes.string,
  data: PropTypes.any,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default EventsTimeline;
