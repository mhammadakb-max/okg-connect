import React from 'react';
import PolicyPageLayout from '../components/shared/PolicyPageLayout';

export default function EnvironmentalPolicy() {
  return (
    <PolicyPageLayout
      heroTitle="Cleaner sites, less waste, better discipline."
      heroIntro="OKG supports responsible site behaviour through housekeeping, waste control and careful use of materials."
      eyebrow="Environmental Policy"
      heading="Policy statement"
      statement="OKG supports responsible site behaviour through housekeeping, waste control and careful use of materials."
      additionalText="This policy is written for a new company and should be reviewed as OKG grows, wins projects, hires teams and develops formal procedures."
      checklist={[
        'Reduce unnecessary material wastage through proper planning and supervision.',
        'Maintain clean work areas and avoid creating avoidable disruption.',
        'Dispose of waste through approved site arrangements.',
        'Protect existing works, surroundings and client property.',
        'Encourage practical environmental awareness among workers and subcontractors.',
      ]}
    />
  );
}