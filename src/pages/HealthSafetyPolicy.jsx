import React from 'react';
import PolicyPageLayout from '../components/shared/PolicyPageLayout';

export default function HealthSafetyPolicy() {
  return (
    <PolicyPageLayout
      heroTitle="Safe work is part of professional execution."
      heroIntro="OKG expects workers, supervisors and subcontractors to follow site safety rules and avoid shortcuts that create risk."
      eyebrow="Health & Safety Policy"
      heading="Policy statement"
      statement="OKG expects workers, supervisors and subcontractors to follow site safety rules and avoid shortcuts that create risk."
      additionalText="This policy is written for a new company and should be reviewed as OKG grows, wins projects, hires teams and develops formal procedures."
      checklist={[
        'Follow PPE requirements and site induction rules.',
        'Comply with main contractor or client safety instructions.',
        'Report unsafe conditions, access issues and high-risk activities.',
        'Keep work areas reasonably clean and controlled.',
        'Stop or escalate work where safety conditions are not acceptable.',
      ]}
    />
  );
}