import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
    font-family: ${props => props.theme.fonts.mono};
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
    src: 'media/LanceWalkingR.gif',
    alt: 'Loading',
})`
    margin: 0 20px;
`

const Loader: React.FC = () => (
    <Loading>
        <LanceWalking />
        {'LOADING...'}
    </Loading>
)

export default Loader
