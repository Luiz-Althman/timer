import styled from 'styled-components';

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 3.5rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
    }
`;

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;
    table {
        width: 100%;
        border-collapse: collapse; // se eu colocar um borda do td de 1px e não colocar esse estilo, ele vai pegar um 1px do td da esquerda mais um da direita, ou seja, 2px. E o Collapse faz com que só exista uma borda entre eles.
        min-width: 600px; // para forçar o scroll

        th {
            background-color: ${(props) => props.theme['gray-600']};
            padding: 1rem;
            text-align: left;
            color: ${(props) => props.theme['gray-100']};
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }
            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            background-color: ${(props) => props.theme['gray-700']};
            border-top: 4px solid ${(props) => props.theme['gray-800']};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }
            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`;

const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const;

// o Typescript entende que dentro do STATUS_COLOR, o valores das chaves são strings, ou seja, qualquer string e não o que eu estou realmente passando dentro dele que são "yellow-500", etc...
// Utilizando o "as const", eu digo para o Typescript que os valores dentro das chaves, nunca irão mudar, sempre será esse. Para testar, tira o "as const" e passa o mouse em cima do STATUS_COLOR da linha 83 ou na linha 60.

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS;
}
// keyof typeof STATUS_COLORS serve para caso eu queira acrescentar outras cores, eu acrescente somente na const do STATUS_COLOR, sem precisar colocar na tipagem também, já os chaves e valores, são os mesmos sempre. Caso eu não tivesse isso, a tipagem ficaria statusColor: {yellow:'yellow-500'} e toda cor nova, eu teria que acrescentar nos dois. Assim poupa trabalho e é mais inteligente. Para testar, basta adicionar uma cor que tenha no theme configurada dentro da const e passar o mouse em cima do STATUS_COLORS.

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 9999px;
        background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`;
