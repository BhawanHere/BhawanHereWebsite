// ── DATA ──────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {emoji:'🤖',title:'AI Campus Assistant',desc:'Generative AI chatbot with secure ID-based access integrating university data for real-time academic queries.',tags:['Python','OpenAI API','Gen AI'],color:'#dbeafe',accent:'#3b6cf8'},
  {emoji:'🛡️',title:'Anomaly-Based IDS',desc:'Hybrid IDS using AdaBoost ML achieving 99.3% accuracy with real-time Dash/Plotly dashboard.',tags:['Python','scikit-learn','Plotly'],color:'#dcfce7',accent:'#16a34a'},
  {emoji:'🌐',title:'Network Discovery Tool',desc:'Automated device discovery across 20+ sites via SSH, consolidating into structured Excel outputs.',tags:['Python','Netmiko','Pandas'],color:'#ede9fe',accent:'#7c3aed'},
  {emoji:'🎓',title:'Campus Events App',desc:'Full-stack RSVP platform with organizer workflows, REST endpoints, and MongoDB persistence.',tags:['Node.js','Express','MongoDB'],color:'#fef9c3',accent:'#ca8a04'},
  {emoji:'🔍',title:'Fraud Detection System',desc:'MySQL schema with triggers detecting threshold violations and geo anomalies. ETL pipeline included.',tags:['SQL','MySQL','ETL'],color:'#fee2e2',accent:'#dc2626'},
  {emoji:'📡',title:'SDN IDS/IPS (Mininet)',desc:'DoS-focused pipeline with Ryu controller for real-time detection and automatic flow-rule mitigation.',tags:['SDN','Mininet','scikit-learn'],color:'#cffafe',accent:'#0891b2'},
  {emoji:'💬',title:'UniConnect App',desc:'High-fidelity Figma prototype with role-based flows tested with 6 users.',tags:['Figma','UX Research','Prototyping'],color:'#fce7f3',accent:'#db2777'},
  {emoji:'⚽',title:'SportsPro Support App',desc:'PHP/MySQL database-driven support system with CRUD and role-based authentication.',tags:['PHP','MySQL','PDO'],color:'#dcfce7',accent:'#15803d'},
  {emoji:'🏥',title:'HealthLink Platform',desc:'Agile/Scrum SDLC documentation — 12-week roadmap, QA, Secure SDLC, ethics analysis.',tags:['Agile','SDLC','QA'],color:'#e0f2fe',accent:'#0369a1'},
];
const EXPERIENCE = [
  {period:'Jan 2026 – Present',title:'Teaching Assistant',org:'Mobile App Development',bullets:['Supported students during labs explaining app development concepts.','Reviewed submissions and provided rubric-aligned feedback.','Coordinated with instructor/TA team to improve lab guidance.']},
  {period:'May 2025 – Dec 2025',title:'Network Analyst Co-op',org:'Teck Resources Limited, Vancouver',bullets:['Built SSH-based inventory reports across 20+ production sites.','Ran automated discovery tool covering thousands of network devices.','Added validation checks ensuring Excel output accuracy.','Created ServiceNow tickets with clear problem details for escalation.']},
  {period:'Dec 2022 – May 2025',title:'Omni Customer Fulfillment Associate',org:'Walmart, Kamloops',bullets:['Acted as shift lead during peak hours maintaining speed and accuracy.','Recognised with Safety Hero, Friendliest Associate, and Shining Star awards.']},
  {period:'Sept 2024 – Aug 2025',title:'Parking Appeals & Advisory Committee',org:'Volunteer · University Governance',bullets:['Reviewed parking policies and recommended process improvements with admin teams.','Strengthened governance, policy analysis, and student advocacy skills.']},
  {period:'2023 – 2025',title:'Technology Mentor',org:'Volunteer · Kamloops Immigrant Services',bullets:['Guided senior community members in navigating technology.','Built ability to explain complex concepts to diverse, non-technical audiences.']},
  {period:'2023 – 2025',title:'Sustainability Club Member',org:'Volunteer · Campus Initiative',bullets:['Organised sustainability initiatives and environmental awareness campaigns.','Developed project coordination and community engagement skills.']},
];
const SKILLS = ['Python','JavaScript','React','Node.js','SQL','C#','PHP','MongoDB','MySQL','Figma','Git','scikit-learn','Netmiko','Pandas','REST API','JWT','Agile','Scrum','Cisco','IDS/IPS','Machine Learning','SDN'];