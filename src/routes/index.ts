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
router.post(`/pages`, (req: Request, res: Response) => {
  const data: any = req.body();
});

//edit a page
router.post(`/pages/:id`, (req: Request, res: Response) => {
  const data: any = req.body();
});

//delete a page
router.post(`/pages/:id`, (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;
});

export default router;
