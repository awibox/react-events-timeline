import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './EventsTimeline.scss';

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
      {
        data && data.map((item) => (
          <div key={item.year} className={styles.event}>
            <div className={styles.year}>{item.year}</div>
            <div className={styles.content}>
              {item.content}
            </div>
          </div>
        ))
      }
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
