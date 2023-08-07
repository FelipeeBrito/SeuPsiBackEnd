import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyReply } from "fastify";
import { FastifyRequest } from "fastify";

export async function customerRoute(app: FastifyInstance) {
  app.post("/customers", async (req: FastifyRequest, res: FastifyReply) => {
    const newCostumer = z.object({
      name: z.string(),
      socialName: z.string(),
      profilePicture: z.string(),
      gender: z.string(),
      cpf: z.string(),
      email: z.string(),
      birthdayDate: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      plan: z.string(),
      schedules: z.array(
        z.object({
          date: z.string(),
          professional: z.string(),
          type: z.string(),
          situation: z.string(),
        })
      ),
    });
    const {
      name,
      socialName,
      profilePicture,
      gender,
      cpf,
      email,
      birthdayDate,
      city,
      state,
      country,
      plan,
      schedules,
    } = newCostumer.parse(req.body);
    await prisma.customers.create({
      data: {
        name,
        socialName,
        profilePicture,
        gender,
        cpf,
        email,
        birthdayDate,
        city,
        state,
        country,
        plan,
        schedules: {
          create: schedules,
        },
      },
    });
  });

  app.get("/customers", async (req: FastifyRequest, rep: FastifyReply) => {
    const customers = await prisma.customers.findMany();
    return customers;
  });

  app.patch(
    "/customers/:id",
    async (req: FastifyRequest, rep: FastifyReply) => {
      const customersId = z.object({
        id: z.string().uuid(),
      });
      const customersData = z.object({
        name: z.string(),
        socialName: z.string(),
        profilePicture: z.string(),
        gender: z.string(),
        cpf: z.string(),
        email: z.string(),
        birthdayDate: z.string(),
        city: z.string(),
        state: z.string(),
        country: z.string(),
        plan: z.string(),
        schedules: z.array(
          z.object({
            date: z.string(),
            professional: z.string(),
            type: z.string(),
            situation: z.string(),
          })
        ),
      });
      try {
        const { id } = customersId.parse(req.params);
        const {
          name,
          socialName,
          profilePicture,
          gender,
          cpf,
          email,
          birthdayDate,
          city,
          state,
          country,
          plan,
          schedules,
        } = customersData.parse(req.body);

        await prisma.customers.update({
          where: {
            id: id,
          },
          data: {
            name,
            socialName,
            profilePicture,
            gender,
            cpf,
            email,
            birthdayDate,
            city,
            state,
            country,
            plan,
            schedules: {
              create: schedules,
            },
          },
        });
        rep.status(200).send({ message: "customer update successfully" });
      } catch (erro) {
        rep.status(400).send({ error: erro });
      }
    }
  );

  app.delete(
    "/customers/:id",
    async (req: FastifyRequest, rep: FastifyReply) => {
      const customersId = z.object({
        id: z.string().uuid(),
      });
      const { id } = customersId.parse(req.params);
      await prisma.customers.delete({
        where: {
          id: id.toString(),
        },
      });
      rep.send({ message: "customers deleted successfully" });
    }
  );
}
