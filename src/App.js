import React from 'react';
import './App.css';
import Category from './Category';


const App = () => {
  const categories = [
    {
      name: 'Business Processing Outsourcing',
      description: 'Also know as, BPO. We know the content volume is endless, \
      even for machines. So we need people. BPOs are vital for providing enough \
      human resources to address the volume of work at an affordable price.',
      vendors: [
        {name: 'Genpact',
        link: 'https://www.genpact.com/services/trust-and-safety'}
      ]
    }, 
    {
      name: 'Collaboration',
      description: 'Some safety concerns are too important and difficult for \
      one company to handle alone. Non-profit organizations provide a safe and \
      secure way for companies to collaborate and address the greatest dangers on the internet.',
      vendors: [
        {
          name: 'Genpact',
          link: 'https://www.genpact.com/services/trust-and-safety'
        }
      ]
    }, 
    {
      name: 'Compliance',
      description: "We must obey the law, but laws can be vague and change over time. \
      These tools help companies obey the law so they don’t get fined, bad press or hit by another risk area.",
      vendors: [
        {
          name: 'Genpact',
          link: 'https://www.genpact.com/services/trust-and-safety'
        }
      ]
    },
    {
      name: 'Consumer/Open-Source',
      description: '',
      vendors: [
        {
          name: 'Genpact',
          link: 'https://www.genpact.com/services/trust-and-safety'
        }
      ]
    },
    {
      name: 'Detection',
      description: 'These are usually software that works in the "backend"/"cloud" aka a server and are usually utilized through APIs (a way for software to \
      communicate with each other). These tools help detect content violations, such as flagging adult content, spam, harmful speech, etc.',
      vendors: [
        {
          name: 'Genpact',
          link: 'https://www.genpact.com/services/trust-and-safety'
        }
      ]
    },
    {
      name: 'Learning Management System',
      description: 'Remember that annual security training that you skipped through? \
      Well, because of changing laws, Trust and Safety has compliance training to \
      ensure people are properly trained on how to obey the law and protect its users.',
      vendors: [
        {
          name: 'Genpact',
          link: 'https://www.genpact.com/services/trust-and-safety'
        }
      ]
    },
    {
      name: 'Law Enforcement',
      description: 'Around the world, law enforcement solve real life crime cases. \
      Because the internet is so intertwined with real-life, law enforcement may \
      request that companies hand over information that help solve lawful cases. And so, where \
      can law enforment submit requests and how can companies respond and occasionally handle over sensitive data?',
      vendors: [
        {
          name: 'Genpact',
          link: 'https://www.genpact.com/services/trust-and-safety'
        }
      ]
    },
    {
      name: 'Platform',
      description: 'Platform is a vague term but this usually means these vendors offer a website \
      with features that support Trust and Safety operations such as case management, detection, \
      etc, all in one system.',
      vendors: [
        {
          name: 'Genpact',
          link: 'https://www.genpact.com/services/trust-and-safety'
        }
      ]
    }
  ];
  return (
    <div>
      <div className='titleContainer'>
        <h1>Trust and Safety Tools</h1>
        <span>How to scale Trust and Safety operations? People and Tools.</span>
      </div>
      {categories.map((cat, index) => <Category key={index} category={cat} />)}
    </div>
  )
}

export default App;
