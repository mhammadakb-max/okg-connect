import React from 'react';
import PolicyPageLayout from '../components/shared/PolicyPageLayout';

export default function HealthSafetyPolicy() {
  return (
    <PolicyPageLayout
      heroTitle="Safe work is part of professional execution."
      heroIntro="OKG expects workers, supervisors and subcontractors to follow site safety rules and avoid shortcuts that create risk."
      eyebrow="Health & Safety Policy"
      heading="What safe work means at OKG."
      statement="OKG expects workers, supervisors and subcontractors to follow site safety rules and avoid shortcuts that create risk. Health and safety is not a compliance exercise — it is a basic professional standard."
      additionalText="This policy is written for a new company and should be reviewed and formalised as OKG grows, wins projects, hires teams and develops formal procedures. It reflects honest intent, not a certified system."
      checklist={[
        'Follow PPE requirements and site induction rules on every project.',
        'Comply with main contractor or client safety instructions at all times.',
        'Report unsafe conditions, access issues and high-risk activities immediately.',
        'Keep work areas reasonably clean and controlled throughout execution.',
        'Stop or escalate work where safety conditions are not acceptable.',
      ]}
    />
  );
}