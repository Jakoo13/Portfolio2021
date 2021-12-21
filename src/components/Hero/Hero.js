import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Jake Woodruff. I am a Full Stack Web and Mobile Developer living in Tempe, Arizona. Let me know what I can do for you!  
      </SectionText>
      <Button onClick={()=>window.open('https://netscaledigital.com/contact-us', '_blank') }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;