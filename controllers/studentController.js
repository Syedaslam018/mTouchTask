const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const students = await Student.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json({ success: true, data: students });
};

exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json({ success: true, data: student });
};

exports.createStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json({ success: true, data: student });
};

exports.updateStudent = async (req, res) => {
  console.log(req.params)
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ success: true, data: student });
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: 'Student deleted successfully' });
};
