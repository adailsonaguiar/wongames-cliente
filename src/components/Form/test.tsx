import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-AxhUy {
        margin: 0.8rem 0;
      }

      .c0 .sc-AxheI {
        margin: 3.2rem auto 0.8rem;
      }

      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 0.8rem;
        color: #030517;
      }

      .c1 a {
        margin-left: 0.2rem;
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 1px solid #3CD3C1;
      }

      .c1 a:hover {
        color: #29b3a3;
      }

      <body>
        <div>
          <main
            class="c0"
          >
            <div
              class="c1"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </main>
        </div>
      </body>
    `)
  })
})
