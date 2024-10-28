import { faFacebook, faInstagram, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderFirstTop() {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className="container py-2">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header-top-icon">
              <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </div>
            <div className="header-top-icon">
              <a href="https://twiter.com">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </div>
            <div className="header-top-icon">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </div>
            <div className="header-top-icon">
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING <FontAwesomeIcon icon={faTruck}/></b>
          </div>
        </div>
      </div>
    </div>
  )
}
