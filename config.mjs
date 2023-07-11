const config = [
  {
    message: 'ID',
    channel: 'ID',
    disjoint: false,
    reactions: [
      {
        emoji: '%F0%9F%93%A2', // 📢 all log
        roles: ['ID']
      }, {
        emoji: '%E2%9C%A8', // ✨ github log
        roles: ['ID']
      }, {
        emoji: '%F0%9F%8C%8F', // 🌏 mc log
        roles: ['ID']
      }, {
        emoji: '%F0%9F%A4%96', // 🤖 discord log
        roles: ['ID']
      }, {
        emoji: '%F0%9F%93%9C', // 📜 archivist
        roles: ['ID']
      }
    ]
  }
]

export default config
