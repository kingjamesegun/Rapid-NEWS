import browseStyles from '../styles/Browse.module.css';
import Image from 'next/image';
import logo from '../public/images/logo.svg'


function Browse() {
    return (
        <div className={`${browseStyles.browse} py-5`}>
            <div className={`text-center mt-5`}>
                <Image src={logo}/>
                <p className={`font-sans text-white text-3xl`}>Latest tech news in the past 24 hours</p>
                <button className="border border-2 py-2 px-6 uppercase text-white mt-3 rounded-full">Browse</button>
            </div>
            
        </div>
    )
}

export default Browse
