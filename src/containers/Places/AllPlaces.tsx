import React, { useEffect } from 'react'
import styled from 'styled-components'
import camelCase from 'lodash/camelCase'
import ProgressiveImage from 'react-progressive-image'
import { useHistory, useLocation } from 'react-router-dom'
import paths from 'constants/paths'
import Hr from 'components/Hr'
import places from './list'

const Container = styled.div`
    margin-bottom: 50px;
    padding: 0 10px;
`

const ImageSet = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`

const Spinner = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    text-align: center;
    z-index: 1000;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    :before {
        border-color: rgba(255, 255, 255, 0.15);
        width: 32px;
        height: 32px;
        position: absolute;
        content: '';
        top: 0;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 500rem;
        border: 0.2em solid rgba(0, 0, 0, 0.1);
    }

    :after {
        border-color: #fff transparent transparent;
        position: absolute;
        content: '';
        top: 0;
        left: 50%;
        width: 100%;
        height: 100%;
        -webkit-animation: loader 0.6s linear;
        animation: loader 0.6s linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        border-radius: 500rem;
        border-color: #767676 transparent transparent;
        border-style: solid;
        border-width: 0.2em;
        -webkit-box-shadow: 0 0 0 1px transparent;
        box-shadow: 0 0 0 1px transparent;
    }
`

const Places: React.FC = () => {
    const { hash } = useLocation()
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            if (hash) {
                const id = hash.replace('#', '')
                const element = document.getElementById(id)
                console.log(id, element)
                if (element) {
                    window.scrollTo({
                        behavior: 'smooth',
                        top: element.offsetTop,
                    })
                }
            }
        }, 100)
    }, [hash])

    return (
        <Container>
            <h1>{'The Wanderlust Section'}</h1>
            <p>
                {
                    "I'm a huge sucker for new places. But I don't get as much time."
                }
            </p>
            <Hr />
            {places.map((place, idx) => {
                const id = `${camelCase(place.label)}`
                return (
                    <React.Fragment key={idx}>
                        <p id={id}>
                            <b>{place.label}</b>
                            <span
                                style={{ marginLeft: 10, cursor: 'pointer' }}
                                onClick={() =>
                                    history.push(`${paths.PLACES}#${id}`)
                                }
                            >
                                {'🔗'}
                            </span>
                        </p>
                        <ImageSet key={idx}>
                            {place.images.map((photo, i) => (
                                <div key={i} style={{ flex: 1, padding: 5 }}>
                                    <ProgressiveImage
                                        src={photo}
                                        placeholder=""
                                    >
                                        {(src: string, loading: boolean) =>
                                            loading ? (
                                                <div
                                                    style={{
                                                        position: 'relative',
                                                        height: 100,
                                                    }}
                                                >
                                                    <Spinner />
                                                </div>
                                            ) : (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    style={{ width: '100%' }}
                                                    alt={place.label}
                                                />
                                            )
                                        }
                                    </ProgressiveImage>
                                </div>
                            ))}
                        </ImageSet>
                        <Hr />
                    </React.Fragment>
                )
            })}
        </Container>
    )
}

export default Places
