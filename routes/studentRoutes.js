const express = require('express');
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');
const authenticateToken = require('../middlewares/authMiddleware');
const validateStudent = require('../middlewares/validateMiddleware');

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', authenticateToken, validateStudent, createStudent);
router.put('/:id', authenticateToken, validateStudent, updateStudent);
router.delete('/:id', authenticateToken, deleteStudent);

module.exports = router;
