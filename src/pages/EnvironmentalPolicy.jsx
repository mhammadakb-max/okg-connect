import React from 'react';
import PolicyPageLayout from '../components/shared/PolicyPageLayout';

export default function EnvironmentalPolicy() {
  return (
    <PolicyPageLayout
      heroTitle="Cleaner sites, less waste, better discipline."
      heroIntro="OKG supports responsible site behaviour through housekeeping, waste control and careful use of materials."
      eyebrow="Environmental Policy"
      heading="What environmental responsibility means at OKG."
      statement="OKG supports responsible site behaviour through proper housekeeping, waste control and careful use of materials. Clean sites reflect professional teams and reduce disruption to clients and surroundings."
      additionalText="This policy is written for a new company and should be reviewed and formalised as OKG grows, wins projects, hires teams and develops formal procedures. It reflects honest intent, not a certified system."
      checklist={[
        'Reduce unnecessary material wastage through proper planning and supervision.',
        'Maintain clean work areas and avoid creating avoidable disruption.',
        'Dispose of waste through approved site arrangements.',
        'Protect existing works, surroundings and client property throughout execution.',
        'Encourage practical environmental awareness among workers and subcontractors.',
      ]}
    />
  );
}