import { PrismaClient, Difficulty, Role } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){const university=await prisma.university.upsert({where:{name:'IIT Madras'},update:{},create:{name:'IIT Madras',verified:true}});await prisma.user.upsert({where:{email:'admin@swayam2.ai'},update:{},create:{email:'admin@swayam2.ai',name:'Platform Super Admin',roles:[Role.SUPER_ADMIN],passwordHash:'ChangeMe!2026'}});await prisma.course.upsert({where:{slug:'ai-for-public-health'},update:{},create:{slug:'ai-for-public-health',title:'AI for Public Health',description:'Use responsible AI to improve population health outcomes.',difficulty:Difficulty.INTERMEDIATE,language:'en',rating:4.9,universityId:university.id}})}
main().finally(()=>prisma.$disconnect());
