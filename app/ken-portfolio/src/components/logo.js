import styled from 'styled-components'

export const Logo = styled.div`
    background: no-repeat center;
    background-size: contain;
    background-image: url(${({ theme }) => theme.logo});
    height: 100%;
    width: 200px;
`
