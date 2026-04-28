import React from 'react';
import PolicyPageLayout from '../components/shared/PolicyPageLayout';

export default function QualityPolicy() {
  return (
    <PolicyPageLayout
      heroTitle="Quality is controlled by scope, supervision and correction."
      heroIntro="OKG is committed to delivering work that matches the agreed scope, approved drawings, site instructions and client expectations."
      eyebrow="Quality Policy"
      heading="Policy statement"
      statement="OKG is committed to delivering work that matches the agreed scope, approved drawings, site instructions and client expectations."
      additionalText="This policy is written for a new company and should be reviewed as OKG grows, wins projects, hires teams and develops formal procedures."
      checklist={[
        'Clarify scope, inclusions, exclusions and measurement basis before work starts.',
        'Use competent teams appropriate to the work package.',
        'Monitor workmanship, levels, alignment, finish and progress during execution.',
        'Correct defects or incomplete works before final handover wherever reasonably possible.',
        'Maintain clear communication with client, consultant and site team.',
      ]}
    />
  );
}