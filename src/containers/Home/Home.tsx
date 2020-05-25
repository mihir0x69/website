import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import paths from 'constants/paths'

const Intro = styled.div`
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
    }
`

const Avatar = styled.div`
    width: 200px;
    height: 200px;
    background-image: url('${require('media/hero.jpeg')}');
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
`

const AvatarWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    padding: 0 10px;
    flex: 2;

    @media (max-width: 991px) {
        padding: 0;
        text-align: center;
        margin-top: 50px;
    }
`

const Latest = styled.div`
    display: flex;
    margin-bottom: 100px;
    & > div {
        padding: 0 20px;
    }

    @media (max-width: 991px) {
        flex-direction: column;
    }
`

const LatestSection = styled.div`
    flex: 1;
    cursor: pointer;
    border-radius: 5px;
    transition: all 200ms ease-in-out;
    text-align: center;

    :hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

const BLOG_LINK = '/blog/f-sharp-learning-to-use-fake-and-paket'
const PLACE_LINK = `${paths.PLACES}#nimdariPuneNovember2019`

const Home: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <Intro>
                <AvatarWrapper>
                    <Avatar />
                </AvatarWrapper>
                <Content>
                    <h1 style={{ margin: 0 }}>{"Hey, I'm Mihir!"}</h1>
                    <p>
                        {'Associate Technical Lead at Harbinger Group.'}
                        <br />
                        {
                            "I love building systems. I've built this little place from scratch to geek out with my fellow programmers :)"
                        }
                    </p>
                    <p>
                        {
                            "I write JavaScript and C# for a living. But I've had plenty of opportunities to touch many other technologies."
                        }
                    </p>
                    <p>
                        {
                            "When I'm not coding, you'll find me hanging out with my friends. You can read more about me "
                        }
                        <Link to={paths.WHOAMI}>{'here.'}</Link>
                    </p>
                </Content>
            </Intro>
            {/* TODO: Make this dynamic */}
            <Latest>
                <LatestSection onClick={() => history.push(BLOG_LINK)}>
                    <h2>{'Latest Blog Post'}</h2>
                    <p>
                        {'FSharp: Learning to use FAKE and Paket'}
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
