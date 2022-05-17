import styled from '@xstyled/styled-components'
import { useTodoQuery } from '../../generated/graphql'

const DemoText = styled.div`
  background-color: 'yellow-500';
  max-width: fit-content;
`

export const DemoComponent = () => {
    const { data } = useTodoQuery({
        variables: {
            id: "1"
        },
    });
    console.log(data);
    return <DemoText>Hello there again!</DemoText>
}