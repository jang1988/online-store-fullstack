import { v4 as uuidv4 } from 'uuid';
import { Device, DeviceInfo } from '../models/models.js';
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

      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (info) {
        info = JSON.parse(info)
        info.array.forEach(i => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        });
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, page, limit } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;

    let devices;

    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ offset, limit });
    }

    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId, offset, limit } });
    }

    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId, offset, limit } });
    }

    if (brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { brandId, typeId, offset, limit } });
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const {id} = req.params
    const device = await Device.findOne(
      {
        where: {id},
        include: [{model: DeviceInfo, as: 'info'}]
      }
    )
    return res.json(device)
  }
}

export default new deviceController();
