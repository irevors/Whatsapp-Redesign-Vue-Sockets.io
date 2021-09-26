const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            'Password must contain at least one letter and one number'
          );
        }
      },
      private: true, // used by the toJSON plugin
    },
    role: {
      type: String,
      default: 'user',
    },
    salt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

// Check if email is taken

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

// Check if password matches the user's password

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

// Hook to encrypt password before saving into db

userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isNew) {
    user.salt = await crypto.randomBytes(32).toString('hex');
  }
  if (user.isModified('password')) {
    user.password = await crypto
      .pbkdf2Sync(user.password, user.salt, 10000, 64, 'sha512')
      .toString('hex');
  }

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
