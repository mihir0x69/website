import React from 'react'
import styled from 'styled-components'
import hero from 'media/mihir.jpg'
import quotes from './quotes'

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
    text-align: center;
`

const Whoami = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Title>{'whoami'}</Title>
                <p><i>{"*Interstellar Main Theme plays in the background*"}</i></p>
                <img src={hero} alt="hero" style={{ width: '100%' }} />
                <p>
                    {`My name is Mihir. I'm a software developer from Pune, India. I write Javascript,
                    C# and F#. I enjoy working on Microsoft Azure. Working on cool stuff at my day job.
                    I love building things from scratch. I enjoy watching small things come together
                    and form a huge system. I loathe unnecessary abstraction and overengineering. I strive
                    to keep things simple.
                    `}
                </p>
                <p>
                    {`I'm a cat lover. Dogs are okay too. I love travelling. I love observing people - 
                    their culture, their way of living. Planning on travelling the world. But
                    duties take precedence ATM.
                    `}
                </p>
                <p>
                    {`I like to imagine myself as an intriguing human being. I can talk about `}
                    <a href="https://en.wikipedia.org/wiki/Advaita_Vedanta">{'Advait Vedanta'}</a>
                    {` and `}
                    <a href="https://en.wikipedia.org/wiki/Rakhi_Sawant">{'Rakhi Sawant'}</a>
                    {` in the same conversation and still not be overwhelmed. I think I have 
                    figured out my life - Just working out a few kinks. Hit me up on `}
                    <a href="https://twitter.com/KarandikarMihir">{'Twitter'}</a>
                    {' if you want to talk.'}
                </p>
                <p>
                    {`My family and my friends are everything to me. I'd give away everything just to be
                    with them for a little longer in this realm. Let's have them say something about me -`}
                </p>
            </div>
            {
                quotes.map((q, idx) => (
                    <blockquote key={idx}>
                        {q.text}
                        <br />
                        {`- ${q.author}`}
                    </blockquote>
                ))
            }
            <div style={{ textAlign: 'center' }}>
                <p><b>{`God damn it guys!! I'm trying really hard to be nice to people.`}</b></p>
            </div>
        </>
    )
}

export default Whoami
