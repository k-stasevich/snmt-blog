import express = require('express');
import { container } from '../infrastructure/di/Container';
import { SettingsProvider } from '../infrastructure/SettingsProvider';
import * as jwt from 'jsonwebtoken';
import IRequest from '../helper/IRequest';
import IUserDecodedFromToken from '../helper/IUserDecodedFromToken';

const settingsProvider = container.get<SettingsProvider>('SettingsProvider');

export function CheckAuth(req: IRequest, _res: express.Response, next: express.NextFunction) {
  if (req.get('Authorization')) {
    const header = req.get('Authorization').split(' ');
    if (header[0] === 'Bearer') {
      try {
        const payload = jwt.verify(header[1], settingsProvider.getSecretKey()) as IUserDecodedFromToken;
        req.user = payload;
        next();
      } catch (error) {
        next({ status: 401, message: 'jwt expired' });
      }
    } else {
      next({ status: 401 });
    }
  } else {
    next({ status: 401 });
  }
}
