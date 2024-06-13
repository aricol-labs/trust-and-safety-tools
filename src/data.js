export const categories = [
    {
      name: "Business Processing Outsourcing",
      description: "Also known as BPO, Business Process Outsourcing is generally \
      needed to increase the processing speed of operations. For Trust and Safety \
      teams, their company may grow to a point where the amount of work coming in \
      (i.e., user reports, emails, etc.) exceeds the capacity of the team. However, \
      hiring additional staff may not make sense because the type of work is usually \
      smaller in scope. BPOs are vital for providing enough humans to address \
      the volume of work at an affordable price.",
      reasons: [
        { name: "You're drowning in volume." },
        { name: "You've standardized QA and need to offload the work." }, 
        { name: "You need ad hoc support." },
      ],
      vendors: [
        {
          name: "PartnerHero",
          link: "https://www.partnerhero.com/trust-and-safety"
        },
        {
          name: "TaskUs",
          link: "https://www.taskus.com/en-us/services/trust-and-safety/"
        },
        {
          name: "Genpact",
          link: "https://www.genpact.com/services/trust-and-safety"
        },
        {
          name: "Accenture, McKinsey, etc.",
          link: ""
        },
      ]
    },
    {
      name: "Case Management",
      description: "These vendors provide a platform (e.g., website) that integrates report routing, \
      investigation support, and sometimes detection into a single system. This centralization enables \
      Trust and Safety teams to efficiently manage the high daily volume of reports and the complexities \
      of content policy enforcement. This improves enforcement accuracy, response times, moderator \
      experience and compliance processes.",
      reasons: [
        { name: "It's cheaper to pay a vendor than maintaining an in-houise team." },
        { name: "You cannot build in-house fast enough in order to respond to the volume or high-risk reports." },
        { name: "You don't need high customizability." },
        { name: "You want to centralize investigations into one system." },
      ],
      vendors: [
        {
          name: "Musubi",
          link: "https://www.musubilabs.ai/"
        },
        {
          name: "Safetykit",
          link: "https://www.safetykit.com/"
        },
        {
          name: "Checkstep",
          link: "https://www.checkstep.com/"
        },
        {
          name: "Active Fence",
          link: "https://www.activefence.com/"
        },
        {
          name: "Cinder",
          link: " https://www.cinder.co/"
        },
        {
          name: "Intrinsic",
          link: "https://withintrinsic.com/products/content-moderation"
        },
        {
          name: "Falkor",
          link: "https://falkor.ai/"
        }
      ]
    },
    {
      name: "Collaboration",
      description: "For a long time, Trust and Safety teams were isolated \
      from each other due to concerns about privacy and competition. However, \
      we’ve learned that these teams often encounter the same bad actors, and \
      some safety concerns are too significant and complex for a single company \
      to handle alone. These public resources provide a safe and secure way for \
      businesses to collaborate and address the greatest dangers on the internet.",
      reasons: [
        { name: "Unpredendedented safety challenges like AI-generated content." },
        { name: "Child safety initiatives." },
      ],
      vendors: [
        {
          name: "All Tech Is Human",
          link: "https://alltechishuman.org/"
        },
        {
          name: "World Federation of Advertisers",
          link: "https://wfanet.org/"
        },
        {
          name: "Digital Forensic Research Lab",
          link: "https://dfrlab.org/"
        },
        {
          name: "Marketplace Risk",
          link: "https://www.marketplacerisk.com/"
        },
        {
          name: "Responsible AI Collaborative",
          link: "https://incidentdatabase.ai/"
        },
        {
          name: "Online Safety Tech Industry Association",
          link: "https://ostia.org.uk/"
        },
        {
          name: "Tech Coalition",
          link: "https://www.technologycoalition.org/"
        },
        {
          name: "Integrity Institute",
          link: "https://integrityinstitute.org/"
        },
      ]
    }, 
    {
      name: "Compliance",
      description: "Businesses must obey the law else they get fined, receive bad press, or get hit by another risk area. \
      However, laws can be vague and change over time, so these tools help businesses remain in good-standing with the law.",
      reasons: [
        { name: "You do not have the engineering or legal support to keep up with the law." },
        { name: "It's too expensive to build in-house." },
      ],
      vendors: [
        {
          name: "Tremau",
          link: "https://tremau.com/"
        },
        {
          name: "Unveil",
          link: "https://unveiltech.io/"
        },
      ]
    },
    {
      name: "Consumer/Open-Source",
      description: "Trust and Safety teams typically operate within a company, \
      and sometimes their enforcement policies do not align with individual \
      moderation needs. For example, if you have a phobia of spiders and do \
      not want to see them on your feed, you can't ask the company to remove \
      all images of spiders. These tools empower individuals to moderate their own content.",
      reasons: [
        { name: "You want to build your own moderation for specific platforms." }
      ],
      vendors: [
        {
          name: "Bluesky's Ozone",
          link: "https://github.com/bluesky-social/ozone"
        },
        {
          name: "Meta's Purple Llama: CyberSecEval and Guard",
          link: "https://ai.meta.com/blog/purple-llama-open-trust-safety-generative-ai/"
        },
        {
          name: "Meta's Threat Exchange",
          link: "https://github.com/facebook/ThreatExchange"
        },
        {
          name: "Block Party",
          link: "https://www.blockpartyapp.com/"
        },
      ]
    },
    {
      name: "Detection",
      description: "Traditionally, Trust and Safety teams have been reactive, \
      responding to violating content after the harm has occurred. Detection \
      tools help operations be proactive, staying ahead of escalations and \
      reducing the need for fire-fighting. These tools are typically used via \
      APIs (a way for software to communicate with each other). Each vendor's \
      performance can vary and may not work for custom policies.",
      reasons: [
        { name: "You need to be proactive with detecting safety risks." },
      ],
      vendors: [
        {
          name: "PhotoDNA",
          link: "https://www.microsoft.com/en-us/photodna"
        },
        {
          name: "Thorn Safer",
          link: "https://www.thorn.org/solutions/for-platforms/"
        },
        {
          name: "WebPurify",
          link: "https://www.webpurify.com/"
        },
        {
          name: "Hive",
          link: "https://thehive.ai/"
        },
        {
          name: "Detect deepfakes for audio",
          link: "https://www.npr.org/2024/04/05/1241446778/deepfake-audio-detection"
        },
        {
          name: "GameSafer",
          link: "https://gamersafer.com/"
        },
        {
          name: "SightEngine",
          link: "https://sightengine.com/"
        },
        {
          name: "WebKyte",
          link: "https://webkyte.com/"
        },
        {
          name: "Azure AI Content Safety",
          link: "https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety/"
        },
        {
          name: "AWS Rekognition",
          link: "https://aws.amazon.com/rekognition/"
        }
      ]
    },
    {
      name: "Learning Management System",
      description: "Remember that annual security training you skipped through? \
      Due to evolving laws, Trust and Safety now includes compliance training to \
      ensure that everyone is properly trained on how to obey the law and protect users.",
      reasons: [
        { name: "You need to create and track compliance trainings." },
      ],
      vendors: [
        {
          name: "AbsorbLMS",
          link: "https://www.absorblms.com/"
        },
        {
          name: "TalentLMS",
          link: "https://www.talentlms.com/"
        },
        {
          name: "Others",
          link: "https://360learning.com/blog/compliance-training-software/"
        }
      ]
    },
    {
      name: "Law Enforcement",
      description: "Businesses have a responsibility to work with law enforcement \
      around the world to address real-life crime. The challenge is determining \
      which local authorities to collaborate with and ensuring that interactions \
      are tracked, safe, and secure.",
      reasons: [
        { name: "You need a Law Enforcement Response Portal." },
        { name: "You need to report a missing child to America's national authorities." },
        { name: "You are a marketplace and need to determine which substances are banned in the United States." },
      ],
      vendors: [
        {
          name: "Kodex",
          link: "https://www.kodexglobal.com/"
        },
        {
          name: "NCMEC",
          link: "https://www.missingkids.org/home"
        },
        {
          name: "Food and Drug Administration (FDA)",
          link: "https://www.fda.gov/industry/fda-basics-industry/search-databases"
        },
      ]
    },
    {
      name: "Threat Intelligence",
      description: "Similat to Detection, Threat Intelligence is vital to remain \
      proactive with detecting safety risks.",
      reasons: [
        { name: "Person of Interest: You need more information on the off-platform behavior of specific users." },
        { name: "Detecting sophisticated bad behavior such as sophisticated scams and terrorism." },
      ],
      vendors: [
        {
          name: "DarkTower",
          link: "https://getdarktower.com/"
        },
        {
          name: "Feedly",
          link: "https://feedly.com/"
        },
        {
          name: "ActiveFence",
          link: "https://www.activefence.com/solutions/threat-intelligence/"
        },
        {
          name: "Resolver",
          link: "https://www.resolver.com/"
        }
      ]
    }
  ];