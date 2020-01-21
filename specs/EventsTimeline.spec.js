import React from 'react';
import { shallow } from 'enzyme';
import EventsTimeline from '../src/components/EventsTimeline';

const testTitle = 'Timeline Title';
const testIconClass = 'fa fa-briefcase';
const testIcon = <i className={testIconClass}/>;
const testColor = ['green', 'blue', 'orange'];
const testData = [
  {
    date: '01.20',
    title: 'Item Title',
    label: 'Item Label',
    location: 'San Hose',
    content: (<div>Test content.</div>),
  },
  {
    title: 'Item Title 2',
    label: 'Item Label 2',
    location: 'London',
  }
];

describe('EventsTimeline', () => {
  it('should render correctly', () => {
    const component = shallow(<EventsTimeline
      icon={testIcon}
      title={testTitle}
      data={testData} />);
    expect(component).toMatchSnapshot();
  });
  testColor.map((item) => {
    it(`should have class ${item}`, () => {
      const component = shallow(<EventsTimeline
        color={item}
        icon={testIcon}
        title={testTitle}
        data={testData} />);
      expect(component).toHaveClassName(item);
    });
  });
  it('should have icon', () => {
    const component = shallow(<EventsTimeline
      icon={testIcon}
      title={testTitle}
      data={testData} />);
    expect(component.find('.title').get(0).props.className).toEqual('title');
  });
  it('should not have icon', () => {
    const component = shallow(<EventsTimeline
      title={testTitle}
      data={testData} />);
    expect(component.find('.title').get(0)).toEqual(undefined);
  });
  it('should not have data', () => {
    const component = shallow(<EventsTimeline icon={testIcon} title={testTitle} />);
    expect(component.get(0).props.children[1]).toEqual(undefined);
  });
});
