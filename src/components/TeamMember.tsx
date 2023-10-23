import React from 'react';
import Image from 'next/image'

interface TeamMemberProps  {
  key: number;
  name: string;
  imageSrc: string;
  role: string;
  width: number;
  height: number;
}

function TeamMember(props: TeamMemberProps) {
  return (
    <div className="team-member">
      <Image src={props.imageSrc} alt={props.name} width={props.width} height={props.height} />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

export default TeamMember;
