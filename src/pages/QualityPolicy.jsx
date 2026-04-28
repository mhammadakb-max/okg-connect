import React from 'react';
import PolicyPageLayout from '../components/shared/PolicyPageLayout';

export default function QualityPolicy() {
  return (
    <PolicyPageLayout
      heroTitle="Quality is controlled by scope, supervision and correction."
      heroIntro="OKG is committed to delivering work that matches the agreed scope, approved drawings, site instructions and client expectations."
      eyebrow="Quality Policy"
      heading="What quality means at OKG."
      statement="OKG is committed to delivering work that matches the agreed scope, approved drawings, site instructions and client expectations. Measurement, inspection and correction are part of the work — not optional extras."
      additionalText="This policy is written for a new company and should be reviewed and formalised as OKG grows, wins projects, hires teams and develops formal procedures. It reflects honest intent, not a certified system."
      checklist={[
        'Clarify scope, inclusions, exclusions and measurement basis before work starts.',
        'Use competent teams appropriate to the work package.',
        'Monitor workmanship, levels, alignment, finish and progress during execution.',
        'Correct defects or incomplete works before final handover wherever reasonably possible.',
        'Maintain clear communication with client, consultant and site team throughout.',
      ]}
    />
  );
}