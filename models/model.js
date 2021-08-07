const mongoose = require("../configuration/db");

const navSchema = mongoose.Schema({});
exports.navigation = mongoose.model("navigations", navSchema);

const homecomp1schema = mongoose.Schema({});
exports.homecomp1 = mongoose.model("homecompones", homecomp1schema);

const homecomp4schema = mongoose.Schema({});
exports.homecomp4 = mongoose.model("homecompfours", homecomp4schema);

const homecomp6schema = mongoose.Schema({});
exports.homecomp6 = mongoose.model("homecompsixes", homecomp6schema);

const homecomp61lastcompschema = mongoose.Schema({});
exports.homecomp61lastcomp = mongoose.model(
  "homecomp61lastcomps",
  homecomp61lastcompschema
);

const homecomp62lastcompschema = mongoose.Schema({});
exports.homecomp62lastcomp = mongoose.model(
  "homecomp62lastcomps",
  homecomp62lastcompschema
);

const homecomp8schema = mongoose.Schema({});
exports.homecomp8 = mongoose.model("homecompeights", homecomp8schema);

const bollywoodLeftArticleSchema = mongoose.Schema({});
exports.bollywoodLeftArticleData = mongoose.model(
  "bollywoodleftarticledatas",
  bollywoodLeftArticleSchema
);

const bollywoodRightArticleSchema = mongoose.Schema({});
exports.bollywoodRightArticleData = mongoose.model(
  "bollywoodrightarticledatas",
  bollywoodRightArticleSchema
);

const reactfixedpartschema = mongoose.Schema({});
exports.reactfixedpartdata = mongoose.model(
  "reactfixedparts",
  reactfixedpartschema
);

const reactmaincontentschema = mongoose.Schema({});
exports.reactmaincontentdata = mongoose.model(
  "reactmaincontents",
  reactmaincontentschema
);

const reactfooterlinkschema = mongoose.Schema({});
exports.reactfooterlinkdata = mongoose.model(
  "reactfooterlinks",
  reactfooterlinkschema
);

const reactauthordetailschema = mongoose.Schema({});
exports.reactauthordata = mongoose.model(
  "reactfooterinfos",
  reactauthordetailschema
);

const reactsuggestionschema = mongoose.Schema({});
exports.reactsuggestiondatamodel = mongoose.model(
  "reactsuggestiondatas",
  reactsuggestionschema
);
