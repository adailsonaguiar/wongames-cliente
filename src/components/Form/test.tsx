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
      .c0 {
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

      .c0 a {
        margin-left: 0.2rem;
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 1px solid #3CD3C1;
      }

      .c0 a:hover {
        color: #29b3a3;
      }

      <body>
        <div>
          <main
            class=""
          >
            <div
              class="c0"
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
