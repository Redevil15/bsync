import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from '@/public/logo.png';
import { signIn } from "@/app/lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get started for free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row items-center justify-center gap-2">
          <Image
            src={Logo}
            alt="Logo"
            className="size-10"
          />
          <h4 className="text-3xl font-semibold">B<span className="text-primary">Sync</span></h4>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <form action={async () => {
            'use server'
            await signIn('google')
          }} className="w-full">
            <GoogleAuthButton/>
          </form>
          <form action={async () => {
            'use server'
            await signIn('github')
          }} className="w-full">
            <GithubAuthButton/>
          </form>
          
        </div>
      </DialogContent>
    </Dialog>
  );
}