-- Seed data for orgs table
-- Based on research from Manifund pages and other online sources

-- Lightcone Infrastructure
INSERT INTO orgs (
  slug,
  name,
  subtitle,
  description,
  headcount,
  target_2026,
  website,
  logo_url,
  budget_url,
  donation_url,
  email,
  tags,
  created_at,
  updated_at
) VALUES (
  'lightcone',
  'Lightcone Infrastructure',
  'We build beautiful infrastructure for truth-seeking and world-saving',
  'Lightcone Infrastructure operates LessWrong.com and the AI Alignment Forum, manages Lighthaven (a 30,000 sq. ft. campus in Berkeley), and creates websites like AI 2027 and "If Anyone Builds It, Everyone Dies". We host conferences and residencies like LessOnline and Inkhaven, providing essential community infrastructure for the AI safety and rationalist communities. LessWrong and the Alignment Forum have been strongly positive for AI safety goals historically, and are expected to continue to be important into the medium term.',
  15, -- Best estimate based on scale of operations
  2000000,
  'https://lesswrong.com',
  'https://res.cloudinary.com/lesswrong-2-0/image/upload/v1629334644/Lightcone-02_xjplqz.png',
  NULL,
  'https://lightconeinfrastructure.com/donate',
  'habryka@lesswrong.com',
  ARRAY['ai-safety', 'rationality', 'technology', 'community-building'],
  NOW(),
  NOW()
);

-- Forethought Foundation
INSERT INTO orgs (
  slug,
  name,
  subtitle,
  description,
  headcount,
  target_2026,
  website,
  logo_url,
  budget_url,
  donation_url,
  email,
  tags,
  created_at,
  updated_at
) VALUES (
  'forethought',
  'Forethought Foundation',
  'Navigate the transition to a world with superintelligent AI systems',
  'Forethought is a nonprofit research organization that tackles important questions about navigating the potentially rapid transition to a world with superintelligent AI systems. Our research focuses on potential new technologies unlocked by AI, avoiding extreme power concentrations, identifying beneficial AI applications, and developing strategies for achieving really good futures. We study AI-enabled technological progress, potential risks like AI-enabled coups, and AI research and development automation. Founded in mid-2024 by Max Dalton, Will MacAskill, Tom Davidson, and Amrit Sidhu-Brar, we aim to figure out what we can do now to prepare for AI that could accelerate innovation and become as capable as human scientists.',
  12, -- Estimated based on team listing
  3000000, -- Estimated based on similar organizations
  'https://www.forethought.org',
  NULL,
  NULL,
  NULL,
  'info@forethought.org',
  ARRAY['ai-safety', 'ai-governance', 'research', 'longtermism'],
  NOW(),
  NOW()
);

-- Mox
INSERT INTO orgs (
  slug,
  name,
  subtitle,
  description,
  headcount,
  target_2026,
  website,
  logo_url,
  budget_url,
  donation_url,
  email,
  tags,
  created_at,
  updated_at
) VALUES (
  'mox',
  'Mox',
  'A coworking & events space in SF for AI safety, AI labs, EA charities & startups',
  'Mox is a 2-floor, 20,000 sq ft venue at 1680 Mission St, San Francisco, established to bring together EA & AI safety folks with the SF tech scene and labs. Since launching in February, we''ve onboarded 40+ coworking members and hosted 20+ events including hackathons, bootcamps, dinners, and retreats. Our members include folks from Anthropic, METR, FLF, and numerous startup founders and AI safety researchers. Started by Manifund with $300k initial funding, we provide essential infrastructure for the AI safety community in San Francisco.',
  4, -- Austin Chen, Rachel Shu, Mattie Reyes, Ara Hao
  1600000, -- Minimal budget for 2026
  'https://moxsf.com',
  NULL,
  NULL,
  'https://moxsf.com/apply',
  'austin@manifund.org',
  ARRAY['ai-safety', 'community-building', 'coworking', 'events'],
  NOW(),
  NOW()
);

-- Tarbell Center for AI Journalism
INSERT INTO orgs (
  slug,
  name,
  subtitle,
  description,
  headcount,
  target_2026,
  website,
  logo_url,
  budget_url,
  donation_url,
  email,
  tags,
  created_at,
  updated_at
) VALUES (
  'tarbell',
  'Tarbell Center for AI Journalism',
  'Supporting journalism that helps society navigate the emergence of advanced AI',
  'The Tarbell Center supports journalism helping society navigate AI development through funding, training, and professional networks to strengthen AI reporting. Our programs include: (1) Tarbell Fellowship - a 12-month program providing early-career journalists with AI training, up to $70,000 stipend, and 9-month placements at major newsrooms like The Guardian, Bloomberg, MIT Tech Review, TIME, and The Verge; (2) Tarbell Grants - awards of $1,000–$15,000 supporting original AI reporting; (3) Residencies for journalists; and (4) Transformer publication. By 2030, we aim to support 10,000 high-quality stories on AI at major outlets and scale Tarbell into the leading institution supporting AI journalism globally.',
  4, -- Cillian Crosson, Leah Harrison, Sawyer Bernath, Shakeel Hashim
  6400000, -- Their stated fundraising goal
  'https://www.tarbellcenter.org',
  NULL,
  NULL,
  'https://www.every.org/tarbell/f/fund-ai-journalism-that',
  'info@tarbellcenter.org',
  ARRAY['ai-governance', 'journalism', 'ai-safety', 'media'],
  NOW(),
  NOW()
);

-- Transluce
INSERT INTO orgs (
  slug,
  name,
  subtitle,
  description,
  headcount,
  target_2026,
  website,
  logo_url,
  budget_url,
  donation_url,
  email,
  tags,
  created_at,
  updated_at
) VALUES (
  'transluce',
  'Transluce',
  'Ensure that AI oversight scales with AI capabilities',
  'Transluce is an independent, nonprofit research lab that builds open, scalable technology for understanding AI systems and steering them in the public interest. Since launching in October 2024, we''ve built Docent, our agent evaluation platform used by over 25 organizations including frontier AI labs (Anthropic, DeepMind), third party safety orgs (METR, Redwood, Apollo), government evaluators, and academic labs. Docent was used as part of Claude 4''s pre-deployment safety analysis and is integrated with SWE-bench. We build scalable systems for monitoring AI agents, test AI behaviors, interpret AI system inner workings, and study issues like sycophancy, self-harm, and reward hacking. Our open core model keeps our oversight stack public and open source while hosted services generate revenue to subsidize public interest work.',
  20, -- Estimated based on funding scale
  11000000,
  'https://transluce.org',
  NULL,
  NULL,
  'https://transluce.org/2025-fundraiser',
  'info@transluce.org',
  ARRAY['ai-safety', 'ai-evaluation', 'research', 'open-source'],
  NOW(),
  NOW()
);