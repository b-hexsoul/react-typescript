interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps): JSX.Element => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

// explicitly saying this is a react functional component, we will also be able to accept children as a prop!
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
