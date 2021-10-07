import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registrationID: { type: String, required: true },
    departmentID: { type: String, default: '' },
    telephone: { type: String, required: true },
    role: { type: String, default: 'employee' },
})

const User = mongoose.model('User', userSchema)

export default User