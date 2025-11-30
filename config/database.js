module.exports = {
  database: process.env.MONGODB_URI || 'mongodb+srv://admin-abhinandan:m65796398@cluster0-icjdh.mongodb.net/alumniportal',
  secret: process.env.JWT_SECRET || 'yoursecret'
}
