import React from 'react'
import styled from 'styled-components'
import loaderImage from 'media/LanceWalkingR.gif'

const Loading = styled.div`
    font-family: ${props => props.theme.fonts.retro};
    position: fixed;
    top: 100px;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LanceWalking = styled.img.attrs({
    src: loaderImage,
    alt: 'Loading',
})`
    margin: 0 20px;
`

const Loader = () => (
    <Loading>
        <LanceWalking />
        {'Loading...'}
    </Loading>
)

export default Loader
