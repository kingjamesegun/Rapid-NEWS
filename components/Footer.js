import Image from 'next/image';
import footerStyles from '../styles/Footer.module.css';
import Logo from '../public/images/logo2.svg';


function Footer() {
    return (
        <div className={`footer ${footerStyles.footer} bg-blue-500 p-5`}>
            <div className="container text-center py-5">
                <div className=''>
                    <Image
                        src={Logo}
                        className={`${footerStyles.footerImage}`}
                    />
                </div>
                <ul className={`flex space-x-6 text-white ${footerStyles.ul}`}>
                    <li className='px-4'>Terms of service</li>
                    <li className='px-4'>Security</li>
                    <li className='px-4'>Sitemap</li>
                    <li className='px-4'>Blog</li>
                </ul>
                <div className={``}>
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
