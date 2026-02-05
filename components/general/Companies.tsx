import React from 'react';

import ConcreteLogistics from '@/public/companies/concrete-logistics.webp';
import RedlineLogistics from '@/public/companies/redline.png';
import DesignUnion from '@/public/companies/design-union.png';
import IPNX from '@/public/companies/ipnx.png';
import Image from 'next/image';

type Props = {};

export default function Companies({}: Props) {
  const companies = [
    {
      name: 'Concrete Logistics',
      logo: ConcreteLogistics,
    },
    {
      name: 'Redline Logistics',
      logo: RedlineLogistics,
    },
    {
      name: 'Design Union',
      logo: DesignUnion,
    },
    {
      name: 'IPNX',
      logo: IPNX,
    },
  ];

  return (
    <section className='py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {companies.map((company, index) => (
            <div key={index} className='flex items-center justify-center'>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={150}
                height={80}
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
