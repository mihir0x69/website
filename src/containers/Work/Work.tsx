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
    }
`

const Employement = styled.p`
    font-family: ${props => props.theme.fonts.heading};
`

const Work: React.FC = () => {
    return (
        <Container>
            <div style={{ flex: 1 }}>
                <Employement>{'Currently employed at'}</Employement>
                <a href="https://harbingergroup.com/lifeatharbinger/">
                    <img style={{ width: '80%' }} src={require('media/harbinger.png')} alt="Harbinger Group" />
                </a>
            </div>
            <div style={{ flex: 1 }}>
                <h2>{'Past Experience'}</h2>
                <p>{'Senior Software Engineer at HCL Technologies'}</p>
                <p>{'Software Engineer at Harbinger Systems'}</p>
                <p>{'Intern at Harbinger Systems'}</p>
            </div>
        </Container>
    )
}

export default Work
