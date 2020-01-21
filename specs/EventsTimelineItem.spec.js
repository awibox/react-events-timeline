import React from 'react';
import { shallow } from 'enzyme';
import EventsTimelineItem from '../src/components/EventsTimelineItem';

const testDate = '2019';
const testTitle = 'Item Title';
const testLabel = 'Item Label';
const testLocation = 'New York';
const testContent = <div>Test content 2.</div>;

describe('EventsTimeline', () => {
  it('should render correctly', () => {
    const component = shallow(<EventsTimelineItem
      content={testContent}
      date={testDate}
      label={testLabel}
      title={testTitle}
      location={testLocation} />);
    expect(component).toMatchSnapshot();
  });
  it('should not have label', () => {
    const component = shallow(<EventsTimelineItem
      content={testContent}
      date={testDate}
      title={testTitle}
      location={testLocation} />);
    expect(component.find('.itemLabel').get(0).props.children).toEqual(undefined);
  });
  it('should not have title', () => {
    const component = shallow(<EventsTimelineItem
      content={testContent}
      date={testDate}
      location={testLocation} />);
    expect(component.find('.itemTitle').get(0).props.children).toEqual(undefined);
  });
  it('should not have location', () => {
    const component = shallow(<EventsTimelineItem
      content={testContent}
      date={testDate}/>);
    expect(component.find('.itemLocation').get(0).props.children).toEqual(undefined);
  });
});
