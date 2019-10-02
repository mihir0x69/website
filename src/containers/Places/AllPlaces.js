import React from 'react'
import styled from 'styled-components'
import places from './list'

const Container = styled.div`
    margin-bottom: 50px;
    padding: 0 10px;
`

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
`

const ImageSet = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`

const Places = () => (
    <Container>
        <Title>{'Places'}</Title>
        <p>
            {"It'd be a long list if I include all my trips from the past, so I'll just start from May 2019."}
        </p>
        {places.map((place, idx) => (
            <React.Fragment key={idx}>
                <p>
                    <b>{place.label}</b>
                </p>
                <ImageSet key={idx}>
                    {place.images.map((photo, i) => (
                        <div key={i} style={{ flex: 1, padding: 5 }}>
                            <img
                                key={i}
                                src={photo}
                                style={{ width: '100%' }}
                                alt={place.text}
                            />
                        </div>
                    ))}
                </ImageSet>
                <hr />
            </React.Fragment>
        ))}
    </Container>
)

export default Places
