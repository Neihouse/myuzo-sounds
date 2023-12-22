import React from 'react';
import styles from '../styles/TeamSection.module.css';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    imageUrl: '/team/alice.jpg',
    bio: 'Alice is a music enthusiast and entrepreneur who founded Myuzo Sounds to help artists find their perfect sound.',
  },
  {
    name: 'Bob Smith',
    role: 'Lead Developer',
    imageUrl: '/team/bob.jpg',
    bio: 'Bob is the tech genius behind our platform, ensuring a smooth and intuitive experience for all users.',
  },
  // More team members...
];

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.heading}>Meet the Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.name} className={styles.teamMember}>
            <img src={member.imageUrl} alt={member.name} className={styles.memberImage} />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberRole}>{member.role}</p>
            <p className={styles.memberBio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
