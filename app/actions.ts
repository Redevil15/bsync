'use server';

import { prisma } from './lib/db';
import { requireUser } from './lib/hooks';
import { parseWithZod } from '@conform-to/zod';
import { onboardingSchema, onboardingSchemaValidation } from '@/lib/zodSchemas';
import { redirect } from 'next/navigation';

export async function OnboardingAction(
  // disbale-eslint-next-line
  prevState: any,
  formData: FormData
) {
  const session = await requireUser();

  const submission = await parseWithZod(formData, {
    schema: onboardingSchemaValidation({
      async isUsernameUnique() {
        const existingUsername = await prisma.user.findUnique({
          where: {
            userName: formData.get('username') as string,
          },
        });

        return !existingUsername;
      },
    }),

    async: true,
  });

  if (submission.status !== 'success') {
    return submission.reply;
  }

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      userName: submission.value.username,
      name: submission.value.fullName,
    },
  });

  return redirect('/dashboard');
}
