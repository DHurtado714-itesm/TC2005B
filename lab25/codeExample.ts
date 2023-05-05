static async deleteUser(id: string) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    await connection.execute(`DELETE FROM clientDiet WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(
      `DELETE FROM clientWorkout WHERE clientId = ?;`,
      [id]
    );
    await connection.execute(
      `DELETE FROM tag WHERE workoutId IN (SELECT id FROM workout WHERE id IN (SELECT workoutId FROM clientWorkout WHERE clientId = ?));`,
      [id]
    );
    await connection.execute(
      `DELETE FROM workout WHERE id IN (SELECT workoutId FROM clientWorkout WHERE clientId = ?);`,
      [id]
    );
    await connection.execute(`DELETE FROM clientGoal WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM clientLevel WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM clientRol WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM journalEntry WHERE clientId = ?;`, [
      id,
    ]);
    // Eliminar medidas
    await connection.execute(`DELETE FROM weight WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM height WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM neck WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM chest WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM leftArm WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM rightArm WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM leftForearm WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM rightForearm WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM waist WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM hip WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM leftleg WHERE clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM rightleg WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM leftcalve WHERE clientId = ?;`, [
      id,
    ]);
    await connection.execute(`DELETE FROM rightcalve WHERE clientId = ?;`, [
      id,
    ]);
    // Eliminar triggers
    await connection.execute(`DELETE FROM usersex where userid = ?;`, [id]);
    await connection.execute(`DELETE FROM usergoal where clientId = ?;`, [id]);
    await connection.execute(`DELETE FROM userjournal where userId = ?;`, [id]);
    await connection.execute(`DELETE FROM userlevels where clientId = ?;`, [id]);			await connection.execute(`DELETE FROM client WHERE id = ?;`, [id]);
    await connection.commit();
  } catch (error) {
    console.error("Error en las consultas, revirtiendo cambios:", error);
    await connection.rollback();
  } finally {
    connection.release();
  }
}