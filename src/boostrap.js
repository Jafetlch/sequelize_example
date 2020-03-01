module.exports = async () => {
  // Require models
  const Tweet = require('./models/Tweet')
  const User = require('./models/User')
  // Create Relations
  User.hasMany(Tweet, { as: 'Tweets', foreignKey: 'userId' })
  Tweet.belongsTo(User, { as: 'User', foreignKey: 'userId' })

  const errHandler = err => console.err(`Error: ${err}`)

  const user = await User.create({
    username: 'Admin',
    passwd: 'secret'
  }).catch(errHandler)

  const tweet = await Tweet.create({
    content: 'This is a actuall test! for a new Tweet!!',
    userId: user.id
  }).catch(errHandler)

  const users = await User.findAll({
    where: { username: 'Admin' },
    include: [{ model: Tweet, as: 'Tweets' }]
  }).catch(errHandler)

  console.log(`${user.username} tweets: ${users}`)
}
