import Head from 'next/head';
import React from 'react';

interface HeaderProps {
  title: string;
  description: string;
}
const Header = ({ title, description }: HeaderProps) => {
  return (
    <Head>
      <title>{title} - TODO</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
