import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-2 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          alt="Login com goolge"
          width={18}
          height={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
