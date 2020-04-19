<div align="center">

![react-events-timeline](https://repository-images.githubusercontent.com/235064756/defcc300-3c3d-11ea-82a7-b1f9b108305a)

[![Version](https://img.shields.io/npm/v/react-events-timeline)](https://www.npmjs.com/package/react-events-timeline)
[![Build](https://travis-ci.org/awibox/react-events-timeline.svg?branch=master)](https://travis-ci.org/awibox/react-events-timeline)
[![Coverage](https://coveralls.io/repos/github/awibox/react-events-timeline/badge.svg?branch=master)](https://coveralls.io/github/awibox/react-events-timeline?branch=master)
[![Minified size](https://img.shields.io/bundlephobia/min/react-events-timeline)](https://github.com/awibox/react-events-timeline/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/react-events-timeline)](https://www.npmjs.com/package/react-events-timeline)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=awibox/react-events-timeline)](https://dependabot.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/awibox/react-events-timeline/pulls)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

</div>

## Table of contents
* [Installation](#installation)
* [Getting started](#gettingstarted)
* [The settings of the component](#settings)
* [Data item parameters](#dataitem)
* [Example](#example)

<a name="installation"></a>
## Installation
You need to install package:
```bash
npm install react-events-timeline
```
You can use yarn:
```bash
yarn add react-events-timeline
```
<a name="gettingstarted"></a>
## Getting started
You should import the component and css file:
```js
import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';
```
Then use the component in your application. For example:
```typescript jsx
<EventsTimeline title='HISTORY' icon={icon} color='blue' data={data} />
```

<a name="settings"></a>
## The settings of the component
|Parameter|Required|Type|Description|Default|
|---------|--------|----|-----------|-------|
|**color**|optional|string|The component supports 3 color versions ```blue```, ```green``` and ```orange```|color:  '#333'|
|**icon**|optional|jsx|You can present the icon in any form as a JSX. For example, using an icon font such as font-awesome: ```<i className='fa fa-briefcase'/>```|By default the icon will not be displayed with the title|
|**title**|optional|string|Sets the name of the timeline next to the icon|By default the title will not be displayed|
|**data**|required|array|See the description of <a name="dataitem" href='#dataitem'>Data item parameters</a>||


<a name="dataitem"></a>
## Data item parameters
Data is an array containing objects. For example:
```typescript jsx
const data = [
{
    date: 2019,
    title: 'Senior Developer',
    label: 'GitHub',
    location: 'Palo Alto, California (USA)',
    content: (<div>
      Description
    </div>),
},
...OtherObjects
]
```
|Parameter|Required|Type|Description|
|---------|--------|----|-----------|
|**date**|required|string|Date for item output. It can be ```YYYY```,``MM.YY``,```DD.MM``` or any other configuration.|
|**content**|required|jsx|Your content for item|
|**title**|optional|string|The title of the item|
|**label**|optional|string|Label is the text that will be highlighted in color|
|**location**|optional|string|Location designation|

<a name="example"></a>
## Example
```typescript jsx
import EventsTimeline from 'react-events-timeline';
import 'react-events-timeline/dist/main.css';

const data = [
{
    date: 2019,
    title: 'Senior Developer',
    label: 'GitHub',
    location: 'Palo Alto, California (USA)',
    content: (<div>Description</div>),
}];
const icon = <i className='fa fa-briefcase'/>;

const App = () => (
  <div className="app">
    ...
    <EventsTimeline title='WORK HISTORY' icon={icon} color='blue' data={data} />
  </div>
);
export default App;
```
