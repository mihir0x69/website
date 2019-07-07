import React from 'react'
import styled from 'styled-components'
import hero from 'media/mihir.jpg'
import quotes from './quotes'

const Container = styled.div`
    margin-bottom: 50px;
    padding: 0 10px;
`

const Title = styled.h2`
    font-family: ${props => props.theme.fonts.retro};
    text-align: center;
`

const SocialLink = styled.a.attrs({ taregt: '_blank' })`
    margin: 0 5px;
    display: inline-block;
`

const socialLinks = [
    { label: 'Github', link: 'https://github.com/KarandikarMihir' },
    {
        label: 'StackOverflow',
        link: 'https://stackoverflow.com/users/5241520/mihir',
    },
    { label: 'Twitter', link: 'https://twitter.com/KarandikarMihir' },
    { label: 'LinkedIn', link: 'https://in.linkedin.com/in/karandikarmihir' },
    { label: 'Email', link: 'mailto:karandikar.mihir@outlook.com' },
]

const Whoami = () => {
    return (
        <Container>
            <div style={{ textAlign: 'center' }}>
                <Title>{'whoami'}</Title>
                <p>{'को ऽहं?'}</p>
                <p>
                    <i>
                        {'*Interstellar Organ Theme plays in the background*'}
                    </i>
                </p>
                <img src={hero} alt="hero" style={{ width: '100%' }} />
                <p>
                    {`Mihir. I'm a software developer from Pune, India. I write Javascript,
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
                    <a
                        href="https://en.wikipedia.org/wiki/Advaita_Vedanta"
                        target="_blank"
                    >
                        {'Advait Vedanta'}
                    </a>
                    {` and `}
                    <a
                        href="https://en.wikipedia.org/wiki/Rakhi_Sawant"
                        target="_blank"
                    >
                        {'Rakhi Sawant'}
                    </a>
                    {` in the same breath and still not be overwhelmed. I think I have 
                    figured out my life - Just working out a few kinks. Hit me up on `}
                    <a
                        href="https://twitter.com/KarandikarMihir"
                        target="_blank"
                    >
                        {'Twitter'}
                    </a>
                    {' if you want to talk.'}
                </p>
                <p>
                    {`My family and my friends are everything to me. I'd give away everything just to be
                    with them for a little longer in this realm. Let's have them say something about me -`}
                </p>
            </div>
            {quotes.map((q, idx) => (
                <blockquote key={idx}>
                    {q.text}
                    <br />
                    <b>{`- ${q.author}`}</b>
                </blockquote>
            ))}
            <div style={{ textAlign: 'center' }}>
                <p>
                    <b>{`Damn it guys!! I'm trying!!`}</b>
                </p>
                <p>
                    {
                        'सो ऽहम् - The light which is thy fairest form, I see it. I am what He is.'
                    }
                </p>
                <p>
                    {socialLinks.map(({ label, link }, idx) => (
                        <SocialLink key={idx} href={link}>
                            {label}
                        </SocialLink>
                    ))}
                </p>
            </div>
        </Container>
    )
}

export default Whoami
