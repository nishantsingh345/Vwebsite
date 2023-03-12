import React from "react";

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div className='max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Section;
