import React from 'react';
import TeamMember from './TeamMember';

export type Member = {
  id: number;
  name: string;
  imageSrc: string;
  role: string;
};

export type TeamProps = {
  members: Array<{ id: number; name: string; imageSrc: string; role: string }>;
};

function Team(props: TeamProps) {
  const coordinators = props.members.filter(member => member.role === 'Coordinadora');
  const otherMembers = props.members.filter(member => member.role !== 'Coordinadora');

  return (
    <section id="equipo" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-cream-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-teal-600 font-medium text-sm tracking-wider uppercase mb-3">
            Profesionales
          </span>
          <h2 className="text-sage-900 mb-4">Nuestro Equipo</h2>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto">
            Profesionales comprometidos con tu bienestar, en permanente actualización y formación.
          </p>
        </div>

        {/* Coordinators */}
        <div className="mb-12 animate-on-scroll">
          <h3 className="text-center text-sage-700 font-sans font-semibold text-sm tracking-wider uppercase mb-8">
            Coordinación
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {coordinators.map((coordinator, index) => (
              <TeamMember
                key={coordinator.id}
                imageSrc={coordinator.imageSrc}
                name={coordinator.name}
                role={coordinator.role}
                width={220}
                height={220}
                delay={index + 1}
                featured
              />
            ))}
          </div>
        </div>

        {/* Psychologists */}
        <div className="animate-on-scroll">
          <h3 className="text-center text-sage-700 font-sans font-semibold text-sm tracking-wider uppercase mb-8">
            Equipo de Psicólogos
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {otherMembers.map((member, index) => (
              <TeamMember
                key={member.id}
                imageSrc={member.imageSrc}
                name={member.name}
                role={member.role}
                width={180}
                height={180}
                delay={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
