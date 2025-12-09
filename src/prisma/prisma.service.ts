import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client.js';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg({
            connectionString: process.env.DATABASE_URL,
        });
        super({ adapter });
    }
}
