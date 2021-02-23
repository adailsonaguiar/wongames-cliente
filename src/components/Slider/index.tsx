import { forwardRef } from 'react'
import SliderSlick, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SliderSlick, SliderProps> = (
  { children, settings },
  ref
) => (
  <S.Wrapper>
    <SliderSlick ref={ref} {...settings}>
      {children}
    </SliderSlick>
  </S.Wrapper>
)

export default forwardRef(Slider)
