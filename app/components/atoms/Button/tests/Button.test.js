import { shallow } from 'enzyme';
import { ButtonVanilla } from '../Button';

describe('Button Component', () => {
  let button = '';
  beforeEach(() => {
    button = shallow(<ButtonVanilla>Submit</ButtonVanilla>);
  });

  test('should render correctly', () => {
    expect(button).toMatchSnapshot();
  });

  test('should render disabled', () => {
    button = shallow(<ButtonVanilla disabled>Submit</ButtonVanilla>);
    expect(button.find({ disabled: true })).toHaveLength(1);
  });

  test('should render title element', () => {
    button = shallow(<ButtonVanilla title="tooltip">Submit</ButtonVanilla>);
    expect(button.find({ title: 'tooltip' })).toHaveLength(1);
  });
});
