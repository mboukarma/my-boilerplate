import React from 'react';
import App from '../src/components/App';

import { shallow } from 'enzyme';

describe('App', () => {
	test('shold must snapshot', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('h3').text()).toBe('Bonjour Mohammed boukarma');
		expect(wrapper).toMatchSnapshot;
	});
});
