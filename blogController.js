// Controllers/blogController.js
exports.create = async (req, res) => {
    try {
      // Your code to create a blog
      res.status(200).json({ status: 'success', data: 'Blog created' });
    } catch (err) {
      res.status(500).json({ status: 'error', message: err.message });
    }
  };
  
  exports.read = async (req, res) => {
    try {
      // Your code to read a blog
      res.status(200).json({ status: 'success', data: 'Blog read' });
    } catch (err) {
      res.status(500).json({ status: 'error', message: err.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      // Your code to delete a blog
      res.status(200).json({ status: 'success', data: 'Blog deleted' });
    } catch (err) {
      res.status(500).json({ status: 'error', message: err.message });
    }
  };
  
  exports.update = async (req, res) => {
    try {
      // Your code to update a blog
      res.status(200).json({ status: 'success', data: 'Blog updated' });
    } catch (err) {
      res.status(500).json({ status: 'error', message: err.message });
    }
  };
  