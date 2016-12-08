import express from 'express';


class ApiResource {
  constructor(model) {
    this.model = model;
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.create = this.create.bind(this);
  }

  static errorHandler(res, err) {
    return res.send(500, err);
  }

  static notFound(res) {
    return res.send(404);
  }

  index(req, res) {
    this.model.find((err, instances) => {
      if (err) return ApiResource.errorHandler(res, err);
      return res.json(200, instances);
    });
  }

  show(req, res) {
    this.model.findById(req.params.id, (err, instance) => {
      if (err) return ApiResource.errorHandler(res, err);
      if (!instance) return ApiResource.notFound(res);
      return res.json(200, instance);
    });
  }

  create(req, res) {
    this.model.create(req.body, (err, instance) => {
      if (err) return ApiResource.errorHandler(res, err);
      return res.json(201, instance);
    });
  }

  update(req, res) {
    if (req.body.id) delete req.body.id;
    this.model.findById(req.params.id, (err, instance) => {
      if (err) return ApiResource.errorHandler(res, err);
      if (!instance) return ApiResource.notFound(res);
      const updated = Object.assign(instance, req.body);
      updated.save(err => {
        if (err) return ApiResource.errorHandler(res, err);
        return res.json(200, instance);
      });
    });
  }

  destroy(req, res) {
    this.model.findById(req.params.id, (err, instance) => {
      if (err) return ApiResource.errorHandler(res, err);
      if (!instance) return ApiResource.notFound(res);
      instance.remove(err => {
        if (err) return ApiResource.errorHandler(res, err);
        return res.send(204);
      });
    });
  }

  getRoutes() {
    const router = express.Router();
    router.get('/', this.index);
    router.get('/:id', this.show);
    router.post('/', this.create);
    router.patch('/:id', this.update);
    router.delete('/:id', this.destroy);

    return router;
  }
}

export default ApiResource;
