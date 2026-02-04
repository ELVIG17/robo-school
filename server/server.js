// Замени функцию initDatabase():
async function initDatabase() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS trainers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        position VARCHAR(100) NOT NULL,
        photo_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const result = await db.query('SELECT COUNT(*) as count FROM trainers');
    if (parseInt(result.rows[0].count) === 0) {
      await db.query(`
        INSERT INTO trainers (name, position) VALUES
        ('Ирина Лайм','преподаватель по робототехнике'),
        ('Марина Орлова','преподаватель по робототехнике'),
        ('Максим Петров','преподаватель по программированию'),
        ('Константин Назаров','преподаватель по робототехнике'),
        ('Лиза Весенняя','преподаватель по робототехнике')
      `);
      console.log('✅ Тренеры добавлены!');
    }
    console.log('✅ PostgreSQL база готова!');
  } catch (error) {
    console.error('❌ Ошибка БД:', error);
  }
}
