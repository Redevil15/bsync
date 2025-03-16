'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState } from 'react-dom';
import { OnboardingAction } from '../actions';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { onboardingSchema } from '@/lib/zodSchemas';
import { SubmitButton } from '@/components/SubmitButtons';

export default function OnboardingRoute() {
  const [lastResult, action] = useFormState(OnboardingAction, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to B<span className="text-primary">Sync</span>{' '}
          </CardTitle>
          <CardDescription>
            We need the following information to set up your profile!
          </CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <CardContent className="grid gap-y-5">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input
                name={fields.fullName.name}
                defaultValue={fields.fullName.initialValue as string}
                key={fields.fullName.key}
                placeholder="Brandon Nurmagomedov"
              />
              <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
            </div>
            <div className="grid gap-y-2">
              <Label>Username</Label>
              <div className="flex rounded-md">
                <span className="px-3 inline-flex items-center rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">
                  BSync.com/
                </span>
                <Input
                  name={fields.username.name}
                  defaultValue={fields.username.initialValue as string}
                  key={fields.username.key}
                  placeholder="example-user-1"
                  className="rounded-l-none"
                />
              </div>
              <p className="text-red-500 text-sm">{fields.username.errors}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Submit" variant="default" className="w-full" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
