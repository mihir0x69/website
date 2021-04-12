import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import paths from 'constants/paths'
import useMediaQuery from 'hooks/useMediaQuery'
import { SocialMediaButtons } from './SocialMedia'

const Intro = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    flex-direction: row;
    margin: 30px 0;
    align-items: center;

    @media (max-width: 991px) {
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
    }
`

const Avatar = styled.figure`
    width: 200px;
    height: 200px;
    background-image: url('${require('media/hero.jpg').default}');
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
`

const AvatarWrapper = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.section`
    padding: 0 50px 0 10px;
    flex: 2;

    @media (max-width: 991px) {
        padding: 0;
        margin-top: 30px;
        text-align: center;
    }
`

const Latest = styled.div`
    display: flex;
    margin-bottom: 100px;
    & > div {
        padding: 0 20px;
    }

    @media (max-width: 991px) {
        text-align: left;
        flex-direction: column;
    }
`

const LatestSection = styled.section`
    flex: 1;
    cursor: pointer;
    border-radius: 5px;
    transition: all 200ms ease-in-out;
    text-align: center;

    :hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

const WavingHand = styled.img`
    animation-name: wave-animation;
    animation-duration: 4s;
    animation-iteration-count: 1;
    transform-origin: 70% 70%;
    display: inline-block;
    margin-bottom: -3px;

    @keyframes wave-animation {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(14deg);
        }
        20% {
            transform: rotate(-8deg);
        }
        30% {
            transform: rotate(14deg);
        }
        40% {
            transform: rotate(-4deg);
        }
        50% {
            transform: rotate(10deg);
        }
        60% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`

const BLOG_LINK = '/blog/simple-mechanism-to-find-dirty-form-fields'
const PLACE_LINK = `${paths.PLACES}#nimdariPuneNovember2019`

const Home: React.FC = () => {
    const history = useHistory()
    const isMobile = useMediaQuery('(max-width: 991px)')
    const IntroWrapper = isMobile ? 'p' : 'h2'

    return (
        <>
            <Intro>
                <AvatarWrapper>
                    <Avatar />
                </AvatarWrapper>
                <Content>
                    <h1 style={{ margin: 0 }}>
                        {'Hey '}{' '}
                        <WavingHand
                            src={require('media/waving-hand.png').default}
                            style={{ height: 40 }}
                        />
                    </h1>
                    <IntroWrapper>
                        {"I'm Mihir. Frontend Engineer at "}
                        <a href="https://www.aeratechnology.com/">
                            {'Aera Technology'}
                        </a>
                    </IntroWrapper>
                    <p>
                        {
                            "I love building systems. I've built this little place from scratch to fly my pirate flag for potential recruiters :)"
                        }
                    </p>
                    <p>
                        {"I'm a full-stack developer. And I've had "}
                        <Link to={paths.WORK}>{'plenty of opportunities'}</Link>
                        {' to work on exciting technologies.'}
                    </p>
                    <p>
                        {
                            "When I'm not coding, you'll find me hanging out with my friends. You can read more about me "
                        }
                        <Link to={paths.WHOAMI}>{'here.'}</Link>
                    </p>
                    <SocialMediaButtons />
                </Content>
            </Intro>
            {/* TODO: Make this dynamic */}
            <Latest>
                <LatestSection onClick={() => history.push(BLOG_LINK)}>
                    <h2>{'Latest Blog Post'}</h2>
                    <p>
                        {'Simple mechanism to find dirty form fields'}
                        <br />
                        <Link to={BLOG_LINK}>{'Read now →'}</Link>
                    </p>
                </LatestSection>
                <LatestSection onClick={() => history.push(PLACE_LINK)}>
                    <h2>{'Last Visited Place'}</h2>
                    <p>
                        {'Nimdari, Pune - November 2019'}
                        <br />
                        <Link to={PLACE_LINK}>{'Check out →'}</Link>
                    </p>
                </LatestSection>
            </Latest>
        </>
    )
}

export default Home
