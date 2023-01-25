import React from 'react'
import Icon1 from '../../Images/svg1.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from '../Services/ServiceElements'

function Services() {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce expenses blah blah blah</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses2</ServicesH2>
                        <ServicesP>We help reduce expenses blah blah blah2</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses3</ServicesH2>
                        <ServicesP>We help reduce expenses blah blah blah3</ServicesP>
                    </ServicesCard>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesH1>
    </ServicesContainer>
  )
}

export default Services