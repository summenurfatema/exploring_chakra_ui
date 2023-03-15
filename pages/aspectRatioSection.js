import { AspectRatio, Image } from '@chakra-ui/react';
import React from 'react';

const AspectRatioSection = () => {
   
    return (
        <div>
            {/* video */}
            <AspectRatio maxW='560px' ratio={1}>
             <iframe
                title='naruto'
                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                allowFullScreen
            />
            </AspectRatio>
            {/* image */}
            <AspectRatio maxW='400px' ratio={4 / 3}>
                <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
            </AspectRatio>
        </div>
    );
};

export default AspectRatioSection;