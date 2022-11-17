import express, { Router, Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'It Works with Nodemon!' });
});

//get all pages
router.get(`/pages`, async (req: Request, res: Response) => {
  const pages = await prisma.page.findMany({ where: { userId: 1 } });
  res.json(pages);
});

//show a page
router.get(`/pages/:id`, async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;
  const page = await prisma.page.findUnique({
    where: { id: Number(id) },
  });
  res.json(page);
});

//store a page
router.post(`/pages`, async (req: Request, res: Response) => {
  const data: any = req.body;
  data.userId = 1;
  const page = await prisma.page.create({
    data,
  });
  res.json(page);
});

//edit a page
router.put(`/pages/:id`, async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;

  const data: any = req.body;
  const updatedPage = await prisma.page.update({
    where: { id: Number(id) || undefined },
    data,
  });
  res.json(updatedPage);
});

//delete a page
router.delete(`/pages/:id`, async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;
  const page = await prisma.page.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(page);
});

export default router;
