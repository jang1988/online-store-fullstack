import { v4 as uuidv4 } from 'uuid';
import { Device } from '../models/models.js';
import ApiError from '../error/ApiError.js';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class deviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuidv4() + '.jpg';
      img.mv(path.resolve(__dirname, '../static', fileName));

      const device = await Device.create({ name, price, brandId, typeId, info, img: fileName });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let devices;

    if (!brandId && !typeId) {
      devices = await Device.findAll();
    }

    if (brandId && !typeId) {
      devices = await Device.findAll({ where: {brandId} });
    }

    if (!brandId && typeId) {
      devices = await Device.findAll({ where: {typeId} });
    }

    if (brandId && typeId) {
      devices = await Device.findAll({ where: {brandId, typeId} });
    }

    return res.json(devices);
  }

  async getOne(req, res) {}
}

export default new deviceController();
