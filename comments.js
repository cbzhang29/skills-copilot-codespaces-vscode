// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Import middleware
const authMiddleware = require('../middlewares/authMiddleware');

// Import validator
const commentsValidator = require('../validators/commentsValidator');

// Import multer
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create routes
router.post('/create', authMiddleware, upload.single('image'), commentsValidator.create, commentsController.create);
router.get('/list', authMiddleware, commentsValidator.list, commentsController.list);
router.get('/detail/:id', authMiddleware, commentsValidator.detail, commentsController.detail);
router.put('/update/:id', authMiddleware, upload.single('image'), commentsValidator.update, commentsController.update);
router.delete('/delete/:id', authMiddleware, commentsValidator.delete, commentsController.delete);

// Export router
module.exports = router;