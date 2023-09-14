const Treatment = require('../schemas/treatments');

const createTreatment = async (req, res) => {
  try {
    const newTreatment = new Treatment(req.body);
    const savedTreatment = await newTreatment.save();
    res.status(201).json(savedTreatment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating treatment' });
  }
};

const getTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.id);
    if (!treatment) {
      return res.status(404).json({ error: 'Treatment not found' });
    }
    res.json(treatment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving treatment' });
  }
};

const getAllTreatments = async (req, res) => {
    try {
      const treatments = await Treatment.find();
      res.json(treatments);
    } catch (error) {
      console.error('Error retrieving all treatments:', error);
      res.status(500).json({ error: 'Error retrieving all treatments' });
    }
  };

const updateTreatment = async (req, res) => {
  try {
    const updatedTreatment = await Treatment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTreatment) {
      return res.status(404).json({ error: 'Treatment not found' });
    }
    res.json(updatedTreatment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating treatment' });
  }
};

const deleteTreatment = async (req, res) => {
  try {
    const deletedTreatment = await Treatment.findByIdAndRemove(req.params.id);
    if (!deletedTreatment) {
      return res.status(404).json({ error: 'Treatment not found' });
    }
    res.json(deletedTreatment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting treatment' });
  }
};

module.exports = {
  createTreatment,
  getTreatment,
  getAllTreatments,
  updateTreatment,
  deleteTreatment,
};
