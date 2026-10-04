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
    id: "cloudbuild-2026",
    type: "Hackathon",
    title: "CloudBuild 2026",
    date: "Sep 15, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "MIT ADT Campus",
    speaker: "SBG Core Team",
    description: "A 8-hour hackathon focused on building serverless applications using AWS Lambda and API Gateway.",
    isUpcoming: true,
  },
  {
    id: "intro-ec2-vpc",
    type: "Workshop",
    title: "Intro to EC2 & VPC",
    date: "Oct 05, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual (Chime)",
    speaker: "Jane Doe (AWS Solutions Architect)",
    description: "Learn the fundamentals of Amazon EC2 and Virtual Private Cloud. Hands-on deployment included.",
    isUpcoming: true,
  },
  {
    id: "ml-bedrock",
    type: "Talk",
    title: "Machine Learning with Bedrock",
    date: "Oct 20, 2026",
    time: "4:00 PM - 5:30 PM",
    location: "Auditorium",
    speaker: "John Smith",
    description: "An overview of how generative AI applications can be built seamlessly using Amazon Bedrock.",
    isUpcoming: true,
  }
];

