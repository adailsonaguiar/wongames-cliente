import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading color="black" lineColor="primary" lineBottom size="small">
      My Profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="name"
        initialValue="Jhon Doe"
        label="name"
      />
      <TextField
        name="email"
        type="email"
        initialValue="jhondoe@gmail.com"
        label="Email"
        disabled
      />
      <TextField name="password" type="password" label="Password" />
      <TextField name="newpassword" type="password" label="New Password" />
      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
