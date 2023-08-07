import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyReply } from "fastify";
import { FastifyRequest } from "fastify";

export async function sheduleRoute(app: FastifyInstance) {
  app.post("/shedules", async (req: FastifyRequest, rep: FastifyReply) => {
    const newSchedules = z.object({
      date: z.string(),
      professional: z.string(),
      type: z.string(),
      situation: z.string(),
    });
    const { date, professional, type, situation } = newSchedules.parse(req.body);
    await prisma.schedules.create({
      data: {
        date,
        professional,
        type,
        situation,
      },
    });
  });

  app.get("/schedules", async (req: FastifyRequest, rep: FastifyReply) => {
    const schedules = await prisma.schedules.findMany();
    return schedules;
  });

  app.patch("/schedules/:id",async (req: FastifyRequest, rep: FastifyReply) => {
      const schedulesId = z.object({
        id: z.string().uuid(),
      });
      const schedulesData = z.object({
        date: z.string(),
        professional: z.string(),
        type: z.string(),
        situation: z.string(),
      });
      try {
        const { id } = schedulesId.parse(req.params);
        const { date, professional, type, situation } = schedulesData.parse(
          req.body
        );

        await prisma.schedules.update({
          where: {
            id: id,
          },
          data: {
            date,
            professional,
            type,
            situation,
          },
        });
        rep.status(200).send({ message: "schedules update successfully" });
      } catch (erro) {
        rep.status(400).send({ error: erro });
      }
    }
  );


  app.delete("/schedules/:id",async (req: FastifyRequest, rep: FastifyReply) => {
    const schedulesId = z.object({
        id:z.string().uuid(),
    });
    const {id} = schedulesId.parse(req.params);
    await prisma.schedules.delete({
        where:{
            id: id.toString(),
        },
    });
    rep.send({message:"customers deleted successfully"})
    
})

}
