import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 991px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

const Section = styled.div`
    padding: 20px;
`

const P = styled.p`
    font-family: ${props => props.theme.fonts.heading};
`

const Work: React.FC = () => {
    return (
        <Container>
            <Section>
                <P>{'Currently employed at'}</P>
                <a href="https://harbingergroup.com/lifeatharbinger/">
                    <img
                        style={{ width: '100%' }}
                        src={require('media/harbinger.png')}
                        alt="Harbinger Group"
                    />
                </a>
            </Section>
            <Section>
                <h2>
                    <b>{'Past Experience'}</b>
                </h2>
                <ul>
                    <li>
                        <P>
                            {
                                'Senior Software Engineer at HCL Technologies (2017)'
                            }
                        </P>
                    </li>
                    <li>
                        <P>
                            {
                                'Software Engineer at Harbinger Systems (2016-2017)'
                            }
                        </P>
                    </li>
                    <li>
                        <P>
                            {
                                'Trainee Software Engineer at Harbinger Systems (2016)'
                            }
                        </P>
                    </li>
                </ul>
            </Section>
        </Container>
    )
}

export default Work
