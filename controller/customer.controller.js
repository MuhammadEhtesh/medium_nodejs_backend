const dbContext = require("./../models");
const Customer = dbContext.Customers;

exports.findAll = (req, res) => {
  Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send(err));
};

exports.create = (req, res) => {
  if (req.body.name == null || req.body.email == null) {
    res.status(204).send({
      error: "Empty content not allowed!!!",
    });
  }

  Customer.create(req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
};

exports.findById = (req, res) => {
  Customer.findByPk(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(204).send(err));
};

exports.delete = (req, res) => {
  Customer.destroy({
    where: { id: req.params.id },
  })
    .then((data) =>
      res.status(204).json({
        msg: "Customer deleted.",
      })
    )
    .catch((err) =>
      res.status(400).send({
        error: "Error while deleting!!!",
      })
    );
};

exports.update = (req, res) => {
  Customer.update(req.body, { where: { id: req.params.id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Updated!!",
        });
      } else {
        res.status(400).send({
          message: `Can not update customer with id ${req.params.id}`,
        });
      }
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
