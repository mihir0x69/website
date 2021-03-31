import styled from 'styled-components'

type HrProps = {
    margin?: string
}

const Hr = styled.hr<HrProps>`
    border: none;
    margin: ${props => props.margin || '15px 0 50px 0'};
    height: 1px;
    background-color: gray;
`

export default Hr
