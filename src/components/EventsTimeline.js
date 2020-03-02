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
      {icon && <div className={styles.title}>
          <div className={styles.icon}>{icon}</div>
          <span className={styles.titleText}>{title}</span>
        </div>
      }
      {data && data.map((item) => {
        if (item.date && item.content) {
          return (
            <EventsTimelineItem
              key={item.date}
              content={item.content}
              label={item.label}
              location={item.location}
              title={item.title}
              date={item.date} />
          );
        }
        return false;
      })
      }
    </div>
  );
};

EventsTimeline.propTypes = {
  color: PropTypes.string,
  data: PropTypes.any,
  icon: PropTypes.any,
  title: PropTypes.string,
};

export default EventsTimeline;
