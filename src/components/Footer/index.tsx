import Link from 'next/link'
import * as S from './styles'
import Logo from '../Logo'
import Heading from '../Heading'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:adailsonacj@live.com">adailsonacj@live.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a href="" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href="" target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>
          <a href="" target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-aria-labelledby="links">
          <Link href="">Home</Link>
          <Link href="">Store</Link>
          <Link href="">Buscar</Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit amet</span>
        <span>
          , consectetur adipiscing elit. Nunc rutrum eros non risus cursus
          maximus.
        </span>
        <span>Mauris sagittis lacus est, sed accumsan lacus imperdiet et.</span>
      </S.Column>
    </S.Content>
  </S.Wrapper>
)

export default Footer
