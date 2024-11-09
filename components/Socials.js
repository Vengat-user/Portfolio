import Link from "next/link";
import {RiInstagramLine, RiYoutubeLine, RiDribbbleLine, RiPinterestLine, RiLinkedinLine, RiTwitterXLine} from 'react-icons/ri'

const Socials = () => {
  return ( 
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiYoutubeLine/>    
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiInstagramLine/>    
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiDribbbleLine/>    
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiPinterestLine/>    
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiLinkedinLine/>    
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiTwitterXLine/>    
    </Link>
  </div>
  )
};

export default Socials;
