import React from "react";

const EventComponent: React.FC = () => {
  // only applies to html elements that can be changed
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  }

  return <div>
    <input onChange={onChange} />
  </div>
}

export default EventComponent;