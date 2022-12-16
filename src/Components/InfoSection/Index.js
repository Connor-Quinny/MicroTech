import React from 'react'
// import { Button } from ''
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img } from './InfoElements'

import Image1 from '../../Images/png1.png'

function InfoSection({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt}) {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <SubTitle darkText={darkText}>{description}</SubTitle>
                    <BtnWrap>
                      {/* <Button to='home'>{buttonLabel}</Button> */}
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={"cat"} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>

    </>
  )
}

export default InfoSection