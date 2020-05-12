import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ProgressiveImage from 'react-progressive-image'
import paths from 'constants/paths'
import * as StorageManager from 'utils/StorageManager'
import { Wrapper, Images, Glasses, StartButton, Skip } from './fragments'

const SPACEBAR = 32
const ENTER = 13

type ContentProps = {
    heroes: string
    alwaysSkip: () => void
}

const Content: React.FC<ContentProps> = ({
    heroes,
    alwaysSkip,
}: ContentProps) => (
    <React.Fragment>
        <Wrapper>
            <Images>
                <Glasses src={require('media/thug.png')} />
                <img src={heroes} style={{ width: 250 }} alt="Iddqd" />
            </Images>
            <br />
            <Link to={paths.MENU} style={{ textDecoration: 'none' }}>
                <StartButton>{'PRESS START'}</StartButton>
            </Link>
            <Skip onClick={alwaysSkip}>{'Always skip ?'}</Skip>
        </Wrapper>
    </React.Fragment>
)

const AnimatedIntro: React.FC = () => {
    const history = useHistory()
    useEffect(() => {
        if (StorageManager.hasDisabledIntro()) {
            history.push(paths.MENU)
        }

        document.addEventListener('keyup', onPressStart)

        return () => {
            document.removeEventListener('keyup', onPressStart)
        }
    })

    const onPressStart = (e: KeyboardEvent): any => {
        if (e.keyCode === SPACEBAR || e.keyCode === ENTER) {
            history.push(paths.MENU)
        }
    }

    const alwaysSkip = (): void => {
        StorageManager.disableIntro()
        history.push(paths.MENU)
    }

    return (
        <ProgressiveImage src={require('media/contra.png')} placeholder="">
            {(src: string, loading: boolean) =>
                loading ? null : (
                    <Content heroes={src} alwaysSkip={alwaysSkip} />
                )
            }
        </ProgressiveImage>
    )
}

export default AnimatedIntro
