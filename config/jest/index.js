/*
    This file will setup jest.
    In here you can find.
    - Mocks (window or document api mocking)
    - Improvement in the test utils.
    - Configuration of the enzyme adapter.
*/

import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
