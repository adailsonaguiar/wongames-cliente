import Link from 'next/link'
import TextField from 'components/TextField'
import { Lock, Email, Person } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import { FormWrapper, FormLink } from '../Form'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField icon={<Person />} type="text" placeholder="Nome" name="nome" />
      <TextField
        icon={<Email />}
        type="email"
        placeholder="Email"
        name="email"
      />
      <TextField
        icon={<Lock />}
        type="password"
        placeholder="Password"
        name="password"
      />
      <TextField
        icon={<Lock />}
        type="password"
        placeholder="Confirm Password"
        name="password"
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
