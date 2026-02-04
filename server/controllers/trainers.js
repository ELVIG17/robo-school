const db = require('../models');

const getAllTrainers = async (req, res) => {
  try {
    const trainers = await db.query(
      'SELECT id, name, position, photo_url FROM trainers ORDER BY id'
    );
    res.json(trainers.rows);  // PostgreSQL возвращает .rows
  } catch (error) {
    console.error('Ошибка получения тренеров:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

module.exports = { getAllTrainers };
