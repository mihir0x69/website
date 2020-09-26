import React from 'react'
import styled from 'styled-components'
import Hr from 'components/Hr'
import words from './words'

const P = styled.p`
    font-family: ${props => props.theme.fonts.heading};
`

const ResumeLink = styled(P)`
    @media (max-width: 991px) {
        text-align: center;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;

    @media (max-width: 991px) {
        flex-direction: column-reverse;
    }
`

const Section = styled.div`
    flex: 1;
    padding: 0 10px;

    @media (max-width: 991px) {
        padding: 0;
    }
`

const Words = styled.h2`
    margin: 0;
    font-weight: bold;

    @media (max-width: 991px) {
        text-align: center;
    }
`

const Word = styled.span`
    color: ${props => props.theme.colors.green};
    padding: 3px 5px;
    margin: 3px;
    background-color: rgba(189, 147, 249, 0.2);
    display: inline-block;
    border-radius: 5px;
    cursor: default;

    @media (max-width: 991px) {
        font-size: 20px;
    }
`

const MobileHr = styled(Hr)`
    display: none;

    @media (max-width: 991px) {
        display: block;
    }
`

const Work: React.FC = () => {
    return (
        <div>
            <h1>{'Work Experience'}</h1>
            <p>
                {
                    "I have 4½ years of professional experience in this industry. But my programming journey starts way back in my Dad's office with Visual Basic 98 👨‍💻"
                }
            </p>
            <Hr margin="20px 0" />
            <Container>
                <Section>
                    <h2>
                        <b>{'Current Employment'}</b>
                    </h2>
                    <ul>
                        <li>
                            <P>
                                {'Associate Technical Lead'}
                                <br />
                                <small>
                                    <a href="https://harbingergroup.com/lifeatharbinger/">
                                        {'Harbinger Systems'}
                                    </a>
                                </small>
                            </P>
                        </li>
                    </ul>
                    <h2 style={{ marginTop: 30 }}>
                        <b>{'Past Experience'}</b>
                    </h2>
                    <ul>
                        <li>
                            <P>
                                {'Senior Software Engineer'}
                                <br />
                                <small>
                                    <a href="https://www.hcltech.com/">
                                        {'HCL Technologies'}
                                    </a>
                                </small>
                            </P>
                        </li>
                        <li>
                            <P>
                                {'Software Engineer'}
                                <br />
                                <small>
                                    <a href="https://harbingergroup.com/lifeatharbinger/">
                                        {'Harbinger Systems'}
                                    </a>
                                </small>
                            </P>
                        </li>
                    </ul>
                </Section>
                <Section>
                    <ResumeLink>
                        <a href="/Mihir-Karandikar-Resume.pdf">
                            {'See My Résumé'}
                        </a>
                        {'↗️'}
                    </ResumeLink>
                    <Words>
                        {words.map((w, i) => (
                            <Word key={i}>{w} </Word>
                        ))}
                    </Words>
                    <MobileHr margin="30px 0 20px 0" />
                </Section>
            </Container>
        </div>
    )
}

export default Work
