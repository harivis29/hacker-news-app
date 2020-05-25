import React from 'react';
import { shallow } from 'enzyme';
import HackerNews from './HackerNews';

describe('HackerNews with loading state false', () => {
  const wrapped = shallow(<HackerNews />);
  wrapped.setState({ isLoaded: false });
  it('should render the HackerNews Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('initially renders the HackerNews with Loading state', () => {
    expect(wrapped.find('.Loading').text()).toEqual('Loading...');
  });
});

describe('HackerNews with loading state true and empty data', () => {
  const wrapped = shallow(<HackerNews />);
  wrapped.setState({ isLoaded: true });
  wrapped.setState({ items: [] });

  it('should render correctly with empty news array', () => {
    expect(wrapped.find('.News').length).toEqual(0);
  });
});

describe('HackerNews with loading state true and empty data', () => {
  const wrapped = shallow(<HackerNews />);
  const newsFeed = [
    {
      author: 'pfg',
      comment_text: null,
      created_at: '2017-02-23T13:01:08.000Z',
      created_at_i: 1487854868,
      num_comments: 485,
      objectID: '13713480',
      parent_id: null,
      points: 3030,
      relevancy_score: 7272,
      story_id: null,
      story_text: null,
      story_title: null,
      story_url: null,
      title: 'Announcing the first SHA-1 collision',
      url: 'https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html',
    },
  ];
  wrapped.setState({ isLoaded: true });
  wrapped.setState({ items: newsFeed });

  it('should render correctly with given news item array', () => {
    expect(wrapped.find('.News').length).toEqual(1);
  });
});
