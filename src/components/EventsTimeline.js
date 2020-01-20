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
        {icon && <div className={styles.icon}>
          <i className={`fa fa-${icon}`} />
        </div>
        }
        <span>{title}</span>
      </div>
      {data && data.map((item) => <EventsTimelineItem
        key={item.year}
        year={item.year}
        title={item.title}
        content={item.content} />)}
    </div>
  );
};

EventsTimeline.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.any,
};

export default EventsTimeline;
