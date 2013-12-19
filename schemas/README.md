Place schema files in this directory as .js files, exporting the schema

eg

`team.js` with contents

    module.exports = {
      type: "object",
      list: {
          value: { name: "name" }
      },
      has_many: [
          {name: "players", type: "player"},
          {name: "games",   type: "game"  }
      ],
      properties: {
          name: {
              type: "string",
              required: true
          }
      }
    }

