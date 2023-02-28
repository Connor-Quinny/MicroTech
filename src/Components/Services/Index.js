import React from 'react'
import Icon1 from '../../Images/Img-3.svg'
import Icon2 from '../../Images/svg-3.svg'
import Icon3 from '../../Images/svg1.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from '../Services/ServiceElements'

function Services() {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Asbestos testing and analysis</ServicesH2>
                        <ServicesP>We offer reliable and accurate testing services to identify the presence of asbestos</ServicesP>
                </ServicesCard>
                <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Bulk Sample Analysis</ServicesH2>
                        <ServicesP>Our SEM has a higher magnification compared to the industry standard Polarised Light Microscope</ServicesP>
                </ServicesCard>
                <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Asbestos Management</ServicesH2>
                        <ServicesP>We provide advice on the next appropriate steps to be taken if asbestos is identified</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services