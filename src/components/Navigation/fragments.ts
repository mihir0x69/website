import styled from 'styled-components'

export const NavigationBar = styled.div`
    display: flex;

    @media (max-width: 991px) {
        display: none;
    }
`

export const NavItem = styled.div`
    padding: 20px 0;
    text-align: center;
    font-family: ${props => props.theme.fonts.heading};
    color: ${props => props.theme.colors.pink};
    font-weight: bold;
    flex: 1;
    text-align: right;
    font-size: 20px;
    text-transform: uppercase;

    & > span {
        cursor: pointer;
    }
`

export const HomeNavItem = styled(NavItem)`
    text-align: left;
    @media (max-width: 991px) {
        padding: 10px;

        > span:hover {
            border: 0 !important;
        }
    }

    > span:hover {
        border-bottom: 3px solid ${props => props.theme.colors.foreground};
    }

    > span {
        padding-bottom: 3px;
        border-bottom: 3px solid transparent;
        transition: all 200ms ease-in-out;
    }
`

export const NavWrapper = styled.div`
    display: flex;
    margin: 30px 50px;
    @media (max-width: 991px) {
        margin: 10px;
    }
`

export const RightNavWrapper = styled.div`
    flex: 1;

    @media (max-width: 991px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`
