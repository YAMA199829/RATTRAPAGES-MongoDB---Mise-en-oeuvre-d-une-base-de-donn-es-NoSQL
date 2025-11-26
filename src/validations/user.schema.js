// validations/user.schema.js
// Schémas de validation Zod pour les utilisateurs

import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    name: z.string().min(2),
    age: z.number().int().positive().optional(),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z
    .object({
      email: z.string().email().optional(),
      name: z.string().min(2).optional(),
      age: z.number().int().positive().optional(),
    })
    .strict(),
});
