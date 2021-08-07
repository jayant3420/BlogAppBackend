const model = require("../models/model");

exports.navigation = (req, res) => {
  model.navigation.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.homecomp1 = (req, res) => {
  model.homecomp1.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.homecomp4 = (req, res) => {
  model.homecomp4.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.homecomp6 = (req, res) => {
  model.homecomp6.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.homecomp61lastcomp = (req, res) => {
  model.homecomp61lastcomp.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.homecomp62lastcomp = (req, res) => {
  model.homecomp62lastcomp.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.homecomp8 = (req, res) => {
  model.homecomp8.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.bollywoodleft = (req, res) => {
  model.bollywoodLeftArticleData.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.bollywoodright = (req, res) => {
  model.bollywoodRightArticleData.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.reactfixedpartdata = (req, res) => {
  model.reactfixedpartdata.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.reactmaincontent = (req, res) => {
  model.reactmaincontentdata.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.footerlinks = (req, res) => {
  model.reactfooterlinkdata.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.footerautordetails = (req, res) => {
  model.reactauthordata.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.reactsuggestiondata = (req, res) => {
  model.reactsuggestiondatamodel.find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};
