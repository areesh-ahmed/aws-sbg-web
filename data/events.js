export const events = [
  {
    id: "zero-to-aws-certified",
    type: "Bootcamp",
    title: "Zero to AWS Certified",
    subtitle: "AWS Bootcamp 3-Day Technical Event",
    date: "Aug 3 - Aug 5, 2026",
    time: "Aug 3-4: 2:00 PM - 4:00 PM | Aug 5: 3:00 PM - 4:30 PM",
    location: "N519, MIT ADT Campus",
    speaker: "Giriraj Baheti (President, AWS SBG)",
    chiefGuest: "Mr. Vishal Alhat (Developer Advocate at AWS, former AWS Hero & HashiCorp Ambassador)",
    facultyCoordinator: "Prof. Dr. Rajani Sajjan",
    guestSpeakers: [
      "Mr. Parth Shah (Ex-President, AWS Cloud Club)",
      "Dr. Nandkumar Kulkarni (Head of Department)",
      "Dr. Shraddha Phansalkar (Associate Dean - Academics)"
    ],
    organizingTeam: ["Giriraj Baheti", "Ayush Pedwal", "Heramb Inamke", "Rushikesh Patil", "Shambhavi Mishra"],
    attendees: 120,
    registrations: 250,
    description: "A comprehensive 3-day technical bootcamp introducing students to cloud computing fundamentals, core AWS services, and certification pathways.",
    recap: "Over 120 attendees participated across 3 days. 25 students received 100% exam vouchers for AWS Certified Cloud Practitioner & AI Practitioner exams along with $2,500 total in AWS credits ($100 each).",
    isUpcoming: false,
    highlights: [
      "25 Exam Vouchers (100% covered) for AWS Certified Cloud Practitioner & AI Practitioner exams",
      "25 Students awarded $100 AWS Credits each ($2,500 total hands-on practice fund)",
      "Keynote address by Chief Guest Mr. Vishal Alhat (Developer Advocate at AWS)",
      "Comprehensive AWS Core Services & Cloud Fundamentals deep dive by Giriraj Baheti",
      "Assessment examination conducted to validate learning outcomes",
      "Certification roadmap and continuous learning guidance by Parth Shah (Ex-President)"
    ],
    flow: [
      {
        title: "Day 1 & Day 2: Cloud Fundamentals & AWS Core",
        time: "Aug 3-4 (2:00 PM - 4:00 PM)",
        description: "Inaugural session graced by Chief Guest Mr. Vishal Alhat (AWS Advocate), HOD Dr. Nandkumar Kulkarni, and Associate Dean Dr. Shraddha Phansalkar. Technical keynote and interactive sessions by Giriraj Baheti covering core cloud concepts, AWS services, and industry use-cases."
      },
      {
        title: "Day 3: Assessment, Roadmap & Felicitation",
        time: "Aug 5 (3:00 PM - 4:30 PM)",
        description: "Assessment exam to evaluate student understanding. Inspiring career talk by Mr. Parth Shah on continuous cloud learning and certifications. Felicitation ceremony and voucher/credit announcements."
      }
    ],
    images: [
      { src: "/events/bootcamp/image1.JPG", caption: "AWS Bootcamp Highlights -1" },
      { src: "/events/bootcamp/image2.JPG", caption: "AWS Bootcamp Highlights -2" },
      { src: "/events/bootcamp/image3.JPG", caption: "AWS Bootcamp Highlights -3" }
    ]
  },
  {
    id: "from-prompt-to-production",
    type: "Workshop",
    title: "From Prompt to Production | Kiro × AWS",
    subtitle: "AI-Assisted Development & AWS S3 Cloud Hosting",
    date: "Aug 25, 2026",
    time: "7:00 PM - 9:00 PM",
    location: "Google Meet (Virtual)",
    speaker: "Giriraj Baheti, Raphael D'Almeida, Abhijeet Pawar & Team",
    facultyCoordinator: "Prof. Dr. Rajani Sajjan",
    attendees: 75,
    description: "An interactive workshop guiding participants through turning prompt-driven ideas into functional applications using Kiro SPEC and deploying them live on AWS S3.",
    recap: "75+ participants completed the end-to-end workflow: Plan → Build with Kiro → Generate Site → Create S3 Bucket → Deploy to live public endpoints.",
    isUpcoming: false,
    winners: [
      { rank: "1st Place", name: "Krishnakumar S. Rathod" },
      { rank: "2nd Place", name: "Rahul Suresh Kore" },
      { rank: "3rd Place", name: "Manish Kushwaha" }
    ],
    highlights: [
      "Hands-on AI-assisted development using KIRO SPEC mode & requirements.md",
      "Bauhaus-inspired CSS geometric design system & portfolio showcase",
      "AWS Management Console walkthrough: S3 bucket creation, encryption, static website hosting",
      "Live deployment of participant portfolios with public URL endpoints",
      "Top 3 assignment submissions recognized and awarded"
    ],
    flow: [
      {
        title: "Opening & Vision",
        speaker: "Isha Agrawal",
        description: "Overview of event objectives and vision for AI-driven development with cloud deployment."
      },
      {
        title: "Session 1: KIRO SPEC Demonstration",
        speaker: "Raphael D'Almeida",
        description: "Demonstration of Vibe vs Spec, prompt-to-spec generation, requirements.md, and property-based testing."
      },
      {
        title: "Session 2: Design & Portfolio Showcase",
        speaker: "Abhijeet Pawar & Pratite Acharya",
        description: "Bauhaus-inspired CSS geometric styling and interactive portfolio site demo."
      },
      {
        title: "Session 3 & 4: AWS S3 Deep Dive & Live Deployment",
        speaker: "Giriraj Baheti",
        description: "Step-by-step guidance on AWS console, S3 bucket policy setup, static hosting enablement, and live URL verification."
      }
    ],
    images: [
      { src: "/events/Prompttoproduction/image1.png", caption: "Kiro × AWS Workshop Highlights - 1" },
      { src: "/events/Prompttoproduction/image2.png", caption: "Kiro × AWS Workshop Highlights - 2" }
    ]
  },
  {
    id: "aws-student-community-day-pune",
    type: "Conference",
    title: "AWS Student Community Day Pune 2025",
    subtitle: "Where Academia Meets Cloud Excellence | MIT ADT × MIT WPU",
    date: "SCD 2025",
    time: "Full Day Flagship Event",
    location: "MIT ADT University Auditorium, Pune",
    speaker: "Vishal Alhat, Mayur Bhagia, Mohit Pandit, Abhinivesh Jain, Shubham Londhe & Industry Experts",
    chiefGuest: "Mr. Vishal Alhat (AWS Hero & Developer Advocate), Dr. Mangesh Karad, Dr. Sunita Karad, Dr. Ganesh Pathak",
    facultyCoordinator: "Prof. Dr. Rajani Sajjan",
    guestSpeakers: [
      "Vishal Alhat (AWS Hero & Developer Advocate)",
      "Mayur Bhagia (Solutions Architect at AWS)",
      "Mohit Pandit (Sr. Operations Manager, AWS)",
      "Abhinivesh Jain (AWS Ambassador & Golden Jacket Holder)",
      "Shubham Londhe (Developer Advocate, AWS)",
      "Ganesh Taware (Data Integration Manager & ETL Architect)",
      "Rahul Shivalkar (Lead DevOps Engineer at EPAM)",
      "Ameya Vaideya (Founder & Principal Architect, Dreamworld Tech)",
      "Sankalp Paranjpe (DevSecOps Engineer, Intangles Lab)",
      "Shobhit Verma (Systems & SRE Manager)",
      "Santosh Mamil (Associate Director at Capgemini)"
    ],
    organizingTeam: ["Parth Shah (AWS Cloud Club Captain)", "AWS SBG & Cloud Club MIT ADT Core Team"],
    attendees: 500,
    description: "A flagship cloud conference bringing together students, industry leaders, AWS Heroes, and Solutions Architects across India for deep-dive technical sessions, 3 parallel tracks, and hands-on GenAI & cloud workshops.",
    recap: "Massive community gathering featuring 11+ keynote sessions, 3 parallel tracks (Data, Advanced Security, Cloud Adoption), hands-on serverless labs, student leadership panel, live band music performance, Red Bull activities, and prize distribution to top quiz winners.",
    isUpcoming: false,
    highlights: [
      "Keynotes by AWS Hero Vishal Alhat, Solutions Architect Mayur Bhagia, and Sr. Operations Manager Mohit Pandit",
      "3 Parallel Tracks: Data & Analytics, Advanced Cloud Security, and Cloud Adoption & Real-World Use Cases",
      "Hands-on Workshop: Event-Driven Three-Tier Architecture on AWS (S3, RDS, Lambda) by Rahul Shivalkar",
      "GenAI Security & OWASP Top 10 for LLMs session by Sankalp Paranjpe using Amazon Bedrock Guardrails",
      "Agentic Web & Bedrock AgentCore integration talk by Shubham Londhe",
      "Student Leadership Panel: 'Bridging Academia and Industry' moderated by Prof. Dr. Rajani Sajjan",
      "Interactive technical quiz with goodies and prize distribution to top 5 winners"
    ],
    flow: [
      {
        title: "Registrations & Breakfast Networking",
        time: "Morning",
        description: "Registration pass distribution, informal networking breakfast among students, faculty, and industry leaders."
      },
      {
        title: "Inauguration, Welcome Address & Lamp Lighting",
        speaker: "Dr. Prof. Rajani Sajjan, Dr. Mangesh Karad & Dignitaries",
        description: "Traditional lamp lighting and opening remarks emphasizing cloud empowerment and industry-aligned learning."
      },
      {
        title: "Keynote 1: Evolution of Software & Agentic AI",
        speaker: "Vishal Alhat (AWS Hero & Developer Advocate)",
        description: "Explored evolution from manual coding to Agentic AI, introducing Kiro AI and AWS Builder Center."
      },
      {
        title: "Keynote 2: Deploying GenAI Bedrock Applications at Scale",
        speaker: "Mayur Bhagia (Solutions Architect at AWS)",
        description: "Overview of Amazon Bedrock application lifecycle, security compliance, and multi-agent system demonstration."
      },
      {
        title: "Keynote 3: Cloud Industry Evolution & Advanced AWS Services",
        speaker: "Mohit Pandit (Sr. Operations Manager at AWS)",
        description: "Deep dive into infrastructure to intelligence transformation, GenAI vs traditional ML, and enterprise AWS adoption."
      },
      {
        title: "Keynote 4: Journey to AWS Ambassador & Cloud Excellence",
        speaker: "Abhinivesh Jain (AWS Golden Jacket Holder)",
        description: "Personal career journey, growth mindset, and real-world value of AWS certifications."
      },
      {
        title: "Parallel Tracks: Data, Security & Real-World Cloud Use Cases",
        speaker: "Ganesh Taware, Rahul Shivalkar, Ameya Vaideya, Sankalp Paranjpe, Shobhit Verma, Santosh Mamil",
        description: "Simultaneous tracks covering ETL pipelines, 3-Tier Serverless Architecture, Day 1 Cloud Security, Bedrock Guardrails, and On-Prem to Cloud Migration."
      },
      {
        title: "Agentic Web & Autonomous Systems",
        speaker: "Shubham Londhe (Developer Advocate at AWS)",
        description: "Architecture of intelligent autonomous agents using MCP, Strand Agent, and Bedrock AgentCore with Lambda."
      },
      {
        title: "Captains' Session & Panel Discussion",
        speaker: "AWS Cloud Captains Across India & Panelists",
        description: "Panel on 'Bridging Academia and Industry' featuring Mangesh Bedekar, Dr. Sunita Karad, Smita Singh, Pratik Sharma, and Cloud Captains from MIT-ADT, MIT-WPU, PICT, VIT Bhopal, MJCET."
      },
      {
        title: "Quiz, Live Music & Closing Ceremony",
        speaker: "Parth Shah (AWS Cloud Club Captain)",
        description: "Interactive technical quiz with prizes to top 5 winners, Red Bull activity, Bleeding Souls band performance, and closing remarks."
      }
    ],
    images: [
      { src: "/events/scd2025/image1.png", caption: "AWS Student Community Day Pune 2025 Highlights - 1" },
      { src: "/events/scd2025/image2.png", caption: "AWS Student Community Day Pune 2025 Highlights - 2" },
      { src: "/events/scd2025/image3.png", caption: "AWS Student Community Day Pune 2025 Highlights - 3" },
      { src: "/events/scd2025/image4.png", caption: "AWS Student Community Day Pune 2025 Highlights - 4" }
    ]
  }
];

