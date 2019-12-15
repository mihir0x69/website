import styled from 'styled-components'
import falcon from 'media/falcon.gif'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export const ItemList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

type ItemProps = {
    active: boolean
}

export const Item = styled.li`
    font-size: 14px;
    font-family: ${props => props.theme.fonts.retro};
    padding: 10px;
    position: relative;
    cursor: pointer;
    ${(props: ItemProps) =>
        props.active &&
        `
        &:before {
            position: absolute;
            left: -25px;
            content: url('${falcon}');
        }
    `}
`
