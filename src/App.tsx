import { SignUp } from '@/components/auth/sign-up'

export const App = () => {
  return (
    <div>
      <SignUp
        onSubmit={e => {
          console.log(e)
        }}
      ></SignUp>
    </div>
  )
}
