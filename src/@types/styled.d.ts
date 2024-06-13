// "o nome da pasta tanto faz" - styled.d.ts, o 'd' significa que nesse arquivo, eu só terei definições de tipos no typescript e nunca códigos de javascript ou algo assim.
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
// type ThemeType = typeof defaultTheme; está guardando as propriedades dentro do defaultTheme dentro da variável ThemeType ou qualquer outro nome

// declare module 'styled-components' está criando uma tipagem para o módulo 'styled-components' e isso faz com que toda vez que eu importar o styled-components ele irá puxar os tipos que eu definir dentro dessa tipagem. Eu estou apenas sobrescrevendo e não criando uma tipagem total do zero, por isso eu importo ele (import 'styled-components') e declarei. Caso não faça isso, estarei criando uma do 'zero'.

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
  // DefaultTheme vem de dentro do typescript do styled-components e ele que permite fazer isso. Para achar ele, basta clicar com o control em em cima de algum lugar que estiver usando o .theme. Isso permite que em uma estilização usando props.theme.primary, quando estiver .theme. e der control espaço, irá retornar as propriedades que eu declarei no meu theme (defaultTheme)

  // Agora a total integração do typescript com o styled-components está concluída.
  // Difícilmente isso será feito várias vezes. É comum com a biblioteca styled-components, com as outras em geral, não.
}
