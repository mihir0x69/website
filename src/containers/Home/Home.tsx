import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import paths from 'constants/paths'

const Intro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 70vh;
    flex-direction: row;
    margin: 30px 0;
    align-items: center;

    @media (max-width: 991px) {
        flex-direction: column;
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
        text-align: center;
        margin-top: 50px;
    }
`

const Latest = styled.div`
    display: flex;
    & > div {
        padding: 20px;
    }

    @media (max-width: 991px) {
        flex-direction: column;
    }
`

const Home: React.FC = () => {
    return (
        <>
            <Intro>
                <AvatarWrapper>
                    <Avatar />
                </AvatarWrapper>
                <Content>
                    <h1 style={{ margin: 0 }}>{"Hey, I'm Mihir!"}</h1>
                    <p>
                        {'Associate Tech Lead at Harbinger Group.'}
                        <br />
                        {
                            "I love building systems. I've created this little place to geek out with my fellow programmers :)"
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
            {/* TODO: Make this data dynamic */}
            <Latest>
                <div>
                    <h2>{'Latest Blog Post'}</h2>
                    <p>
                        {'FSharp: Learning to use FAKE and Paket'}
                        <br />
                        <Link
                            to={'/blog/f-sharp-learning-to-use-fake-and-paket'}
                        >
                            {'Read →'}
                        </Link>
                    </p>
                </div>
                <div>
                    <h2>{'Last Visited Place'}</h2>
                    <p>
                        {'Nimdari, Pune - November 2019'}
                        <br />
                        <Link to={`${paths.PLACES}#nimdariPuneNovember2019`}>
                            {'Check out →'}
                        </Link>
                    </p>
                </div>
            </Latest>
        </>
    )
}

export default Home
