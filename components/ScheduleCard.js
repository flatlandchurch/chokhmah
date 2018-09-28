import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Action from './Action';

const ScheduleCard = (props) => (
  <div className="card card-elevation--1 schedule-card">
    <div className="schedule-card-times">
      <p>{moment.unix(props.start).format('MMM D, YYYY')} at {props.time}</p>
      {
        props.end &&
        <p className="schedule-card-end-time">
          {moment.unix(props.end).format('MMM D, YYYY')}
        </p>
      }
    </div>
    <div className="spacer" />
    {
      Boolean(Object.keys(props.action).length) &&
        <Action data={props.action} />
    }
  </div>
);

ScheduleCard.propTypes = {
  action: PropTypes.object,
  end: PropTypes.number,
  start: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};

ScheduleCard.defaultProps = {
  action: {},
  end: '',
};

export default ScheduleCard;
