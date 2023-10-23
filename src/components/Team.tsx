import React from 'react';
import TeamMember from './TeamMember';
export type Member = {
  id: number,
  name: string,
  imageSrc: string, role: string
}
export type TeamProps = {
  members: Array<{ id: number, name: string; imageSrc: string, role: string }>;
}
function Team(props: TeamProps) {
  const coordinators = props.members.filter(member => member.role === "Coordinadora");
  const otherMembers = props.members.filter(member => member.role !== "Coordinadora");

  return (
    <div className="team-section">
      <h2>Equipo Centro Leas</h2>
      <div className="coordinators-grid">
        {coordinators.map(coordinator => (
          <TeamMember
            key={coordinator.id}
            imageSrc={coordinator.imageSrc}
            name={coordinator.name}
            role={coordinator.role}
            width={200}
            height={200}
          />
        ))}
      </div>
      <div className="team-grid">
        {otherMembers.map(member => (
          <TeamMember
            key={member.id}
            imageSrc={member.imageSrc}
            name={member.name}
            role={member.role}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}


export default Team;
