import Link from 'next/link'
import TextField from 'components/TextField'
import { Lock, Email } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import * as S from './styles'
import { FormLink, FormWrapper } from 'components/Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        icon={<Email />}
        type="email"
        placeholder="email@email.com"
        name="email"
      />
      <TextField
        icon={<Lock />}
        type="password"
        placeholder="password"
        name="password"
      />
      <S.ForgotPassword href="/#">Forgot your password?</S.ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Don&apos;t have an account?
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
