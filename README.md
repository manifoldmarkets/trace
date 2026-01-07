# Trace

Trace is a canonical database of AI safety donation opportunities, helping donors understand where to give. It provides up-to-date organization profiles, community reviews, and LLM-powered research assistance. Created by Manifund.

### Technical info

```
CREATE TABLE orgs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,

  subtitle TEXT, -- 1 line summary of what they do
  description TEXT, -- a few paragraphs about their work
  headcount INTEGER, -- approx number of FTE on staff
  target_2026 INTEGER, -- mainline funding sought for 2026

  website TEXT,
  logo_url TEXT,
  budget_url TEXT, -- link to latest budget
  donation_url TEXT, -- link to donate
  email TEXT, -- contact info for donations

  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

Other considerations:

- donations made should be calculated from txns on Manifund or a new external grants table
- maybe have: current balance, burn, 2026 ask, detailed budget
