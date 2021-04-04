import { Express } from 'express';

export abstract class BaseController {
  constructor(protected app: Express) { }

  abstract register(): void;
}
