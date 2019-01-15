import Button from '../index';
import { configureMount } from '../../../utils/test-utils';

const defaultProps = {
    children: 'Hello 👋 I am the button text',
}
const mountComponent = configureMount({ defaultProps })

describe('<Button />', () => {
    it('should render correctly', () => {
        const tree =  mountComponent(Button);
        
        expect(tree).toMatchSnapshot();
    });

    it('shouldn\'t pass style related props to the button', () => {
        const props = {
            primary: true,
            secondary: true,
        }
        const tree =  mountComponent(Button, {props});
        const button = tree.find('button');

        expect(button.props).not.toContain(props)
        
        expect(tree).toMatchSnapshot();
    })
});
