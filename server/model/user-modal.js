import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema(
    {
        name: String,
        designation: String,
        city: String,
        country: String,
        bio: String
    }
)

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'id',
    startAt: 1
})

// userSchema.plugin(autoIncrement.plugin, "user");

const userModel = mongoose.model('Users', userSchema);

export default userModel;