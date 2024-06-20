import Image from 'next/image';
import React from 'react';

const BENIFITS = [
  {
    img: '/images/1.png',
    title: 'ACCESSTO DECISIONMAKERS',
    desc: 'Pitch your project directly totop-tier VCs and qualifiedinvestors.',
  },
  {
    img: '/images/2.png',
    title: 'LOW ENTRYFEE',
    desc: 'Get in front of the big guys and fast-tracky our project to the top without flying to a conference,spending money,or grinding hard to make connections at a side event.',
  },
  {
    img: '/images/3.png',
    title: 'LEVERAGEA CRÈMEDELA CRÈMENETWORK',
    desc: 'Get in touch with the right people like market makers,community builders,KOLs to give your project the needed visibility to breakthrough.',
  },
  {
    img: '/images/4.png',
    title: 'SOCIAL PRESENCE',
    desc: 'Gain brand exposure and awareness before your project lFaunches. Build a community off the back of an appearance on Beras Bounty.',
  },
  {
    img: '/images/5.png',
    title: 'IDEA VALIDATION',
    desc: 'Validate your ideas for instant funding or learn the flaws in your system through expert analysis by the beras.',
  },
  {
    img: '/images/6.png',
    title: 'TEST IN PROD',
    desc: "Expose your dApp to The Binary Network'sover 40 million users for instant use and monetization.",
  },
  {
    img: '/images/7.png',
    title: 'FREE WORKING SPACE',
    desc: "Build a home base in our sky rise Bangkok office in the most livabl city on the planet.Gain access to Bangkok's growing Web3 scene,connect with local builders,and get to anywhere in SEA for conferences.",
  },
] as const;

const HomeBenifits = () => {
  return (
    <div className='container mx-auto mt-32 rounded-3xl border border-solid border-white px-10 py-12'>
      <p className='purple-gradient font-monument text-4xl uppercase'>
        benifits
      </p>

      <div className='mt-14 grid grid-cols-4 gap-10'>
        {BENIFITS.map((benifit, index) => (
          <div key={index}>
            <div className='relative h-40'>
              <Image
                src={benifit.img}
                alt=''
                fill
                sizes='auto'
                className='object-contain'
              />
            </div>
            <p className='mb-6 mt-10 text-2xl font-bold'>{benifit.title}</p>
            <p>{benifit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBenifits;
