import Link from 'next/link';
import { NavItemData } from '@utils/data';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin, faTwitter);

interface FooterProps {
  footerItems: NavItemData[];
}

const ExternalLink = ({ href, children }) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition flex gap-x-3 items-center'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);

export default function Footer({ footerItems }: FooterProps) {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full px-5'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
        <div className='flex flex-col space-y-4'>
          {footerItems.map((item) => (
            <Link href={`/${item.route}`} key={item.route}>
              <a className='text-gray-500 hover:text-gray-600 transition'>
                {item.text}
              </a>
            </Link>
          ))}
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://twitter.com/semiloreId'>
            <FontAwesomeIcon
              icon={faTwitter}
              className='hidden md:inline-block'
            />
            Twitter
            <FontAwesomeIcon icon={faTwitter} className='md:hidden' />
          </ExternalLink>
          <ExternalLink href='https://github.com/semijacks'>
            <FontAwesomeIcon
              icon={faGithub}
              className='hidden md:inline-block'
            />
            GitHub
            <FontAwesomeIcon icon={faGithub} className='md:hidden' />
          </ExternalLink>
          <ExternalLink href='https://www.linkedin.com/in/semijacks/'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='hidden md:inline-block'
            />
            LinkedIn
            <FontAwesomeIcon icon={faLinkedin} className='md:hidden' />
          </ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/uses'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Uses</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
