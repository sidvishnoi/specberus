
exports.check = function ($, sink, sr, cb) {
    var name = "dummy.has-h1";
    var $res = $("h1");
    if ($res.length) sink.emit("ok", name);
    else sink.emit("err", name);
    cb(name);
};