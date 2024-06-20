import React from 'react';

const Footer = () => {
  return (
    <div className='container mx-auto mt-28 text-center'>
      <p className='font-monument text-3xl'>
        JOIN BERAS BOUNTY AND TAKE YOUR DAPP <br /> FROM IDEA TO ICON!
      </p>
      <p className='text-green my-6 text-2xl font-bold'>TO APPLY:</p>
      <p className='inline-block rounded-[100rem] border-2 border-solid border-purple px-14 py-4 text-2xl font-bold'>
        <span>Please Contact:</span>{' '}
        <span className='text-green'>darpan@thebinaryholdings.com</span>
      </p>
      <p className='mt-12 text-xl'>
        <span className='font-semibold'>With the subject: </span>{' '}
        <span>Beras Bounty Application</span>
      </p>
    </div>
  );
};

export default Footer;
