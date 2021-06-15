import { Child } from './Child';

const Parent = (): JSX.Element => {
  return <Child color="red" onClick={() => console.log('clicked')} />;
};

export default Parent;
