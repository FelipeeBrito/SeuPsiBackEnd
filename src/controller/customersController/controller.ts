import { PrismaClient } from "@prisma/client";
import fastify, { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyReply } from "fastify";
import { FastifyRequest } from "fastify";


export async function appRoutes(app: FastifyInstance) {
  app.post("/customers", async (req, res) => {
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
    //   schedules: z.array(z.string()),
    });
    const { name, socialName, profilePicture, gender, cpf, email, birthdayDate, city, state, country, plan } = newCostumer.parse(req.body);
    await prisma.customers.create({
       data:{
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
        // schedules,
       }
    })
  });

  app.get("/customers",async (req, rep) => {
        const customers = await prisma.customers.findMany();
        return customers
        
    })
  
  app.patch("/customers/:id",async (req: FastifyRequest, reply: FastifyReply ) => {
    const customersId = z.object({
        id: z.string().uuid(),
    })
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
    //   schedules: z.array(z.string()),
     
    });
    try{

        const {id} = customersId.parse(req.params);
        const { name, socialName, profilePicture, gender, cpf, email, birthdayDate, city, state, country, plan } = customersData.parse(req.body);
        
        await prisma.customers.update({
            where:{
                id: id,
            },
            data:{
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
                //  schedules,
            } 
        })
        reply.status(200).send({message: "customer update successfully"});
    }catch(erro){
        reply.status(400).send({error:erro})
    };
 

});  

app.delete("/customers/:id",async (request, reply) => {
    const customersId = z.object({
        id:z.string().uuid(),
    });
    const {id} = customersId.parse(request.params);
    await prisma.customers.delete({
        where:{
            id: id.toString(),
        },
    });
    reply.send({message:"customers deleted successfully"})
    
})

}
