import React,{ useState} from 'react';
import Items from './data';
import Image from 'next/image'
import { Li } from './style';


export default function List(){
     const [isItems] = useState(Items)
    return   <>
    {
        isItems.map(item => (
            <Li key={item.id}>
                    <Image
     src={item.src}  alt="portfolio imgs"
      width={500}
      height={500}
    />
                 
                  </Li>
        ))
    }
    
    </>
                  
          
 


}

