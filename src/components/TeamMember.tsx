import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  key: number;
  name: string;
  imageSrc: string;
  role: string;
  width: number;
  height: number;
  delay?: number;
  featured?: boolean;
}

function TeamMember(props: TeamMemberProps) {
  return (
    <div className={`animate-on-scroll delay-${props.delay || 0} group flex flex-col items-center text-center`}>
      <div
        className={`img-reveal mb-4 ${
          props.featured ? 'w-48 h-48 md:w-56 md:h-56' : 'w-40 h-40 md:w-44 md:h-44'
        } rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:shadow-xl group-hover:ring-teal-100 transition-all duration-400`}
      >
        <Image
          src={props.imageSrc}
          alt={props.name}
          width={props.width}
          height={props.height}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sage-900 font-sans font-semibold text-base mb-1">{props.name}</h3>
      <p className="text-teal-600 font-medium text-sm">{props.role}</p>
    </div>
  );
}

export default TeamMember;
