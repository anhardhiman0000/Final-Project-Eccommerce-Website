const dotenv = require('dotenv')

dotenv.config();
const DB = {
    mongoose_cluster_url: process.env.mongoose_cluster_url
}
module.exports = DB
