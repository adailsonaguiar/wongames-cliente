import Game, { GameTemplateProps } from 'templates/Game'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'teste' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://blog.bestbuy.ca/wp-content/uploads/2020/06/Cyberpunk-2077-banner.png',
      gameInfo: {
        title: 'Cyberpunk',
        price: '59.00',
        description: 'Cyberpunk 2077 is a open-world'
      }
    }
  }
}
