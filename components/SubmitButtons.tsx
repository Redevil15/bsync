'use client'

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import Google from '@/public/google.svg';
import Github from '@/public/github.svg';
import Image from "next/image";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();
  return (
    <>
    {pending ? (
      <Button disabled variant="outline" className="w-full">
        <Loader2 className="size-4 mr-2 animate-spin"/>
        Please wait
      </Button>
    ) : (
      <Button variant="outline" className="w-full">
        <Image
          src={Google}
          alt="Google"
          className="size-4 mr-2"
        />
        Sign in with Google
      </Button>
    )}
    </>
  )
}
export function GithubAuthButton() {
  const { pending } = useFormStatus();
  return (
    <>
    {pending ? (
      <Button disabled variant="outline" className="w-full">
        <Loader2 className="size-4 mr-2 animate-spin"/>
        Please wait
      </Button>
    ) : (
      <Button variant="outline" className="w-full">
        <Image
          src={Github}
          alt="Google"
          className="size-4 mr-2"
        />
        Sign in with GitHub
      </Button>
    )}
    </>
  )
}