import React from 'react';
import { shallow } from 'enzyme';
import EventsTimeline from '../src/components/EventsTimeline';

describe('EventsTimeline', () => {
  it('should render correctly', () => {
    const component = shallow(<EventsTimeline />);
    expect(component).toEqual(component);
  });
});
